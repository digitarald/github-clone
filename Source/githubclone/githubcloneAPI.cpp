#include <stdio.h>
#include <stdlib.h>
#include <string>
#include "JSObject.h"
#include "variant_list.h"
#include "DOM/Document.h"

#include "githubcloneAPI.h"

using std::string;
namespace fs = boost::filesystem;

githubcloneAPI::githubcloneAPI(const githubclonePtr& plugin, const FB::BrowserHostPtr& host) : m_plugin(plugin), m_host(host){
    registerMethod("clone", make_method(this, &githubcloneAPI::clone));  
}

githubcloneAPI::~githubcloneAPI(){}

githubclonePtr githubcloneAPI::getPlugin(){
    githubclonePtr plugin(m_plugin.lock());
    if (!plugin) throw FB::script_error("The plugin is invalid");
    return plugin;
}

FB::variant githubcloneAPI::clone(const string& folder, const string& URL){
    // TODO this needs some security (realpath?)
    string clone = "cd ";
    clone.append(folder);
    clone.append(" && git clone ");
    clone.append(URL);
    system(clone.c_str());
    
    FB::variant result = true;
    return result;
}
