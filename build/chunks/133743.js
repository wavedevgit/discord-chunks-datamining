/** Chunk was on 90728 **/
n.d(t, {
  Gp: () => u,
  O4: () => s,
  Yp: () => o,
  pR: () => d,
  ph: () => c
}), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(34674),
  a = n(703656),
  i = n(258971),
  l = n(981631);
let o = () => {
    let e = {
      previousView: (0, i.Xh)()
    };
    (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS, {
      state: e
    })
  },
  s = e => {
    let {
      categoryId: t
    } = e, n = {
      previousView: (0, i.Xh)()
    };
    (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), {
      state: n
    })
  },
  c = e => {
    let {
      applicationId: t
    } = e, n = {
      previousView: (0, i.Xh)()
    };
    (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), {
      state: n
    })
  },
  d = function() {
    let {
      query: e,
      categoryId: t,
      page: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = {
      previousView: (0, i.Xh)()
    }, s = new URLSearchParams;
    null != e && "" !== e && s.set("q", e), null != t && t !== r.MU && s.set("category_id", t.toString()), null != n && n > 1 && s.set("page", n.toString()), (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
      state: o,
      search: s.toString()
    })
  },
  u = e => {
    let {
      location: {
        state: t
      }
    } = (0, a.s1)();
    (0, a.dL)(e, t)
  }