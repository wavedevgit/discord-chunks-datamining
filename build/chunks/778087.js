/** Chunk was on 11814 (5b4cc71a9b5101b0.js) **/
n.d(t, {
  Z: () => a
}), n(26686), n(566702);
var r = n(192379),
  i = n(10718);

function a(e, t) {
  let n = r.useRef(null),
    a = r.useCallback((e, t) => {
      var r, i, a;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (a = null === (i = n.current) || void 0 === i ? void 0 : null === (r = i.textContent) || void 0 === r ? void 0 : r.trim()) && void 0 !== a ? a : "")
    }, []);
  return i.YZ({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: a,
    copyRef: n
  }
}