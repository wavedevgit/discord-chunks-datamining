/** Chunk was on 624 (572fcf0aa11379cf.js) **/
n.d(t, {
  Z: () => s
});
var r = n(111672),
  i = n(358085);

function s() {
  let {
    sidechainAvailable: e
  } = r.Z.useExperiment({
    location: "UserSettingsVoiceProcessing"
  });
  return e && !(0, i.isWeb)()
}