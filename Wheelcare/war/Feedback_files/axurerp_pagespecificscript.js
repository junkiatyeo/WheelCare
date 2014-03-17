for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
$('#u8').attr('axSubmit', 'u12');
$('#u10').attr('axSubmit', 'u12');
gv_vAlignTable['u17'] = 'top';
u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u7'] = 'top';