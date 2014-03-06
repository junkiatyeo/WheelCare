for(var i = 0; i < 15; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u12'] = 'top';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u6'] = 'center';