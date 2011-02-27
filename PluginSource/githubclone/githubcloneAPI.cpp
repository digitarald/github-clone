#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <sys/stat.h>
#include "JSObject.h"
#include "variant_list.h"
#include "DOM/Document.h"

#include "githubcloneAPI.h"

using std::string;

githubcloneAPI::githubcloneAPI(const githubclonePtr& plugin, const FB::BrowserHostPtr& host) : m_plugin(plugin), m_host(host){
    registerMethod("clone", make_method(this, &githubcloneAPI::clone));  
}

githubcloneAPI::~githubcloneAPI(){}

githubclonePtr githubcloneAPI::getPlugin(){
    githubclonePtr plugin(m_plugin.lock());
    if (!plugin) throw FB::script_error("The plugin is invalid");
    return plugin;
}

bool isDir(const string& path){
	struct stat info;
	return stat(path.c_str(), &info) == 0 && S_ISDIR(info.st_mode);
}

bool isClean(const string& str){
	return !(str.find("\"") != string::npos || str.find("\\") != string::npos);
}

FB::variant githubcloneAPI::clone(const string& path, const string& URL){
	string folder = path;
	if (folder.compare(0, 1, "~") == 0){
		folder.erase(0, 1);
		folder = getenv("HOME") + folder;
	}
	
	// Check if folder is a valid folder and the git URL does not contain invalid chars
	if (!isDir(folder) || !isClean(URL)) return false;

	folder = "cd \"" + folder + "\" && git clone \"" + URL + "\"";
	system(folder.c_str());
    
    return true;
}
