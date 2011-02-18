GitHub-Clone
============

Clone repositories to your disk right from the GitHub website. This is a Google Chrome extension.

You often ignore a great project because you are too lazy to clone a repository? No More! This Chrome Extension adds a handy little button to GitHub repositories that allows you to clone a repository right to your disk.

![github-clone](http://cpojer.net/github-clone/github-clone.png)

Demo
----

See [github-clone website](http://cpojer.net/github-clone) or [screencast](https://www.youtube.com/watch?v=ft6mgAOUW84)

Install
-------

This extension only works on Mac OS X for now. It can likely be compiled for Linux and Windows easily. If you want to provide builds and want to test the extension on Linux or Windows, please feel free to fork the repository and send a pull request.

Either clone this repository and load it as unpacked extension in Google Chrome or install directly from the website.

Notes
-----

* If you have any suggestions for improvements, just open a GitHub Issue.
* You need to have git installed on your computer (obviously!).
* Safari and possibly Firefox support are coming
* Security enhancements are in the works

Please note that currently there are no security checks in place on the C++ side. The plugin gains the same rights as your user has. While only accessible by the extension itself, there are potential security issues. Please consider this plugin a proof-of-concept and only consider it public once it appears on the chrome extension gallery. Use this plugin at your own risk. You cannot call me responsible if something bad happens to you or your Mac. As long as this paragraph is in place, this plugin is not recommended for general use. You have been warned.

Develop
-------

The NPAPI plugin was created using [FireBreath](http://www.firebreath.org) and the source is provided in PluginSource in case someone wants to improve the plugin or build it for Windows/Linux. I honestly have no idea if simply moving the source to the FireBreath projects folder will be enough to build. Does anyone know how to import a project in FireBreath?

Credits
-------

Thanks to [@chrisdrackett](http://twitter.com/chrisdrackett) for the lovely icon.
