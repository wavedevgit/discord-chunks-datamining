/** Chunk was on 26109 **/
r.d(t, {
  Mo: () => s,
  SC: () => i,
  _U: () => c
}), r(388685);
var n = r(290486),
  o = r(291476),
  l = r(731965);
let a = (0, n.U)((0, o.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function s(e) {
  let {
    command: t,
    location: r,
    sectionName: n
  } = e, {
    commandAnalyticsContext: o
  } = a.getState(), s = o.get(t);
  if (null == s || s.location !== r || s.sectionName !== n) {
    let e = new Map(o);
    e.set(t, {
      location: r,
      sectionName: n
    }), (0, l.j)(() => a.setState({
      commandAnalyticsContext: e
    }))
  }
}

function c(e) {
  let {
    commandAnalyticsContext: t
  } = a.getState();
  return t.get(e)
}

function i(e) {
  let {
    commandAnalyticsContext: t
  } = a.getState();
  if (t.has(e)) {
    let r = new Map(t);
    r.delete(e), (0, l.j)(() => a.setState({
      commandAnalyticsContext: r
    }))
  }
}