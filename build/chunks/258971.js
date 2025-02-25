/** Chunk was on 93259 **/
if (n.d(t, {
    Uc: () => f,
    Xh: () => g,
    aQ: () => u,
    m_: () => _,
    z8: () => b
  }), n(610138), n(216116), n(78328), n(815648), n(47120), 12633 == n.j) var a, o = n(512969);
var r = n(972959),
  i = n(264043),
  l = n(34674),
  c = n(703656),
  s = n(979007),
  d = n(981631),
  _ = ((a = {}).HOME = "home", a.SEARCH = "search", a.APPLICATION = "application", a.CATEGORY = "category", a);
let u = (0, r.H)(() => ({})),
  b = (0, r.H)(() => ({
    sessionId: null,
    guildId: null,
    entrypoint: null,
    trackedOpenedFromExternalEntrypoint: !1
  }));

function f() {
  let {
    location: {
      state: e
    }
  } = (0, c.s1)();
  return null == e ? void 0 : e.previousView
}

function g() {
  var e, t, n;
  let {
    location: {
      pathname: a,
      search: r
    }
  } = (0, c.s1)();
  if (null != (0, o.LX)(a, {
      path: d.Z5c.GLOBAL_DISCOVERY_APPS,
      exact: !0
    })) return {
    type: "home"
  };
  if (null != (0, o.LX)(a, {
      path: d.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
      exact: !0
    })) {
    let e = new URLSearchParams(r),
      t = {
        type: "search"
      },
      n = e.get("q");
    null != n && "" !== n && (t.query = n);
    let a = Number(e.get("category_id"));
    Number.isInteger(a) && a !== l.MU && (t.categoryId = a.toString());
    let o = Number(e.get("page"));
    return null != o && o > 1 && (t.page = o), t
  }
  let _ = (0, o.LX)(a, {
      path: [d.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(":categoryId")],
      exact: !0
    }),
    {
      categoryId: u
    } = null !== (e = null == _ ? void 0 : _.params) && void 0 !== e ? e : {};
  if (null != _ && null != u) return {
    type: "category",
    categoryId: u
  };
  let b = (0, o.LX)(a, {
      path: [d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(":applicationId", ":section"), d.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId")],
      exact: !0
    }),
    {
      applicationId: f,
      section: g,
      skuId: p
    } = null !== (t = null == b ? void 0 : b.params) && void 0 !== t ? t : {};
  if (null != b && null != f) {
    let e = null === (n = i.Z.getApplication(f)) || void 0 === n ? void 0 : n.name;
    return {
      type: "application",
      applicationId: f,
      applicationName: e,
      section: null != g ? g : null != p ? s.GlobalDiscoveryAppsSections.STORE : s.GlobalDiscoveryAppsSections.ABOUT
    }
  }
}