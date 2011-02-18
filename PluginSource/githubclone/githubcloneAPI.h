#include <string>
#include <sstream>
#include <boost/weak_ptr.hpp>
#include "JSAPIAuto.h"
#include "BrowserHost.h"
#include "githubclone.h"

#ifndef H_githubcloneAPI
#define H_githubcloneAPI

class githubcloneAPI : public FB::JSAPIAuto
{
public:
    githubcloneAPI(const githubclonePtr& plugin, const FB::BrowserHostPtr& host);
    virtual ~githubcloneAPI();

    githubclonePtr getPlugin();

    FB::variant clone(const std::string& folder, const std::string& URL);

private:
    githubcloneWeakPtr m_plugin;
    FB::BrowserHostPtr m_host;
};

#endif // H_githubcloneAPI

