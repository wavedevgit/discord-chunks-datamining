/** Chunk was on 37697 **/
n.d(t, {
  M: () => a
});
var r = n(192379),
  i = n(660384);

function a() {
  let e = r.useRef(new i.Z),
    t = r.useCallback(t => {
      e.current.handleScroll(t)
    }, []);
  return {
    resetScrollPosition: r.useCallback(() => {
      e.current.scrollPosition.set(0)
    }, []),
    scrollPosition: e.current.scrollPosition,
    onScroll: t
  }
}