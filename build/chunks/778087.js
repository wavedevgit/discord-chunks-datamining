/** Chunk was on 52272 **/
n.d(t, {
  Z: () => o
}), n(26686), n(566702);
var r = n(192379),
  i = n(10718);

function o(e, t) {
  let n = r.useRef(null),
    o = r.useCallback((e, t) => {
      var r, i, o;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (o = null === (i = n.current) || void 0 === i ? void 0 : null === (r = i.textContent) || void 0 === r ? void 0 : r.trim()) && void 0 !== o ? o : "")
    }, []);
  return i.YZ({
    channel: e,
    type: "channel"
  }, t), {
    onCopy: o,
    copyRef: n
  }
}