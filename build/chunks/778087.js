/** Chunk was on 11814 (b9188d9bdd9a4469.js) **/
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