/** Chunk was on 12416 **/
n.d(t, {
  o: () => a
});
var r = n(451467),
  l = n(557457),
  i = n(354459),
  o = n(37113);

function a(e, t) {
  var n, a;
  if (null == e || e.type !== i.fO.STREAM || null == e.maxResolution || null == e.maxFrameRate || !((null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height) in o.LY) || !(e.maxFrameRate in o.ws)) return !1;
  let s = (0, r.Z)(o.tI.PRESET_VIDEO, (0, o.aW)(null == e ? void 0 : null === (a = e.maxResolution) || void 0 === a ? void 0 : a.height), (0, o.L9)(e.maxFrameRate), t);
  return !(null == e || (0, l.tR)({
    maxResolution: e.maxResolution,
    maxFrameRate: e.maxFrameRate
  })) || s
}