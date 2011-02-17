#/**********************************************************\ 
#
# Auto-Generated Plugin Configuration file
# for github-clone
#
#\**********************************************************/

set(PLUGIN_NAME "githubclone")
set(PLUGIN_PREFIX "GIT")
set(COMPANY_NAME "cpojernet")

# ActiveX constants:
set(FBTYPELIB_NAME githubcloneLib)
set(FBTYPELIB_DESC "githubclone 1.0 Type Library")
set(IFBControl_DESC "githubclone Control Interface")
set(FBControl_DESC "githubclone Control Class")
set(IFBComJavascriptObject_DESC "githubclone IComJavascriptObject Interface")
set(FBComJavascriptObject_DESC "githubclone ComJavascriptObject Class")
set(IFBComEventSource_DESC "githubclone IFBComEventSource Interface")
set(AXVERSION_NUM "1")

# NOTE: THESE GUIDS *MUST* BE UNIQUE TO YOUR PLUGIN/ACTIVEX CONTROL!  YES, ALL OF THEM!
set(FBTYPELIB_GUID efa2e88b-6499-59a1-80c9-16bec279ac7a)
set(IFBControl_GUID 02e99592-59e5-5d2e-8a34-0bbbd78fba44)
set(FBControl_GUID c261b99a-1a83-5781-ae03-c0cc4fc729e2)
set(IFBComJavascriptObject_GUID e7acedb8-b9c9-55fc-bbef-611ef0969c99)
set(FBComJavascriptObject_GUID 1c6fef1d-a485-5099-8f1b-fcb071ca5914)
set(IFBComEventSource_GUID 42f49bf7-19ff-5c89-98e3-295e255e4840)

# these are the pieces that are relevant to using it from Javascript
set(ACTIVEX_PROGID "cpojernet.githubclone")
set(MOZILLA_PLUGINID "cpojer.net/githubclone")

# strings
set(FBSTRING_CompanyName "cpojer.net")
set(FBSTRING_FileDescription "Clones a Github Repository right from the GitHub website")
set(FBSTRING_PLUGIN_VERSION "1.0.0")
set(FBSTRING_LegalCopyright "Copyright 2011 cpojer.net")
set(FBSTRING_PluginFileName "np${PLUGIN_NAME}.dll")
set(FBSTRING_ProductName "github-clone")
set(FBSTRING_FileExtents "")
set(FBSTRING_PluginName "github-clone")
set(FBSTRING_MIMEType "application/x-githubclone")

# Uncomment this next line if you're not planning on your plugin doing
# any drawing:

# set (FB_GUI_DISABLED 1)

# Mac plugin settings. If your plugin does not draw, set these all to 0
set(FBMAC_USE_QUICKDRAW 0)
set(FBMAC_USE_CARBON 1)
set(FBMAC_USE_COCOA 1)
set(FBMAC_USE_COREGRAPHICS 1)
set(FBMAC_USE_COREANIMATION 0)

# If you want to register per-machine on Windows, uncomment this line
#set (FB_ATLREG_MACHINEWIDE 1)
