/** Chunk was on 22878 **/
n.d(t, {
  Mo: () => a,
  SC: () => d,
  _U: () => c
}), n(47120);
var o = n(15729),
  i = n(877124),
  r = n(731965);
let l = (0, o.U)((0, i.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function a(e) {
  let {
    command: t,
    location: n,
    sectionName: o
  } = e, {
    commandAnalyticsContext: i
  } = l.getState(), a = i.get(t);
  if (null == a || a.location !== n || a.sectionName !== o) {
    let e = new Map(i);
    e.set(t, {
      location: n,
      sectionName: o
    }), (0, r.j)(() => l.setState({
      commandAnalyticsContext: e
    }))
  }
}

function c(e) {
  let {
    commandAnalyticsContext: t
  } = l.getState();
  return t.get(e)
}

function d(e) {
  let {
    commandAnalyticsContext: t
  } = l.getState();
  if (t.has(e)) {
    let n = new Map(t);
    n.delete(e), (0, r.j)(() => l.setState({
      commandAnalyticsContext: n
    }))
  }
}