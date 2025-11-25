/** Chunk was on web.js **/
/** chunk id: 692656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk535655 = require("./535655.js"),
  Chunk754738 = require("./754738.js"),
  Chunk727241 = require("./727241.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk873199 = require("./873199.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk115130 = require("./115130.js"),
  Chunk566620 = require("./566620.js"),
  Chunk127255 = require("./127255.js"),
  Chunk880308 = require("./880308.js"),
  Chunk427996 = require("./427996.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk10718 = require("./10718.js"),
  Chunk895924 = require("./895924.js"),
  Chunk835473 = require("./835473.js"),
  Chunk568100 = require("./568100.js"),
  Chunk471518 = require("./471518.js"),
  Chunk425986 = require("./425986.js"),
  Chunk216780 = require("./216780.js"),
  Chunk857192 = require("./857192.js"),
  Chunk823379 = require("./823379.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk87005 = require("./87005.js"),
  Chunk219066 = require("./219066.js"),
  Chunk106066 = require("./106066.js"),
  Chunk783097 = require("./783097.js"),
  Chunk695676 = require("./695676.js"),
  Chunk98880 = require("./98880.jsx"),
  Chunk804307 = require("./804307.jsx"),
  Chunk888617 = require("./888617.js"),
  Chunk561160 = require("./561160.jsx"),
  Chunk41558 = require("./41558.jsx"),
  Chunk105862 = require("./105862.jsx"),
  Chunk28147 = require("./28147.jsx"),
  Chunk314734 = require("./314734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729755 = require("./729755.js");
let Q = [],
  J = 4,
  $ = 4,
  ee = 6,
  et = 8,
  en = [, , , , ].fill(0).map((e, t) => t),
  er = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.MEDIUM_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.ROW
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.ROW
  }],
  ei = Chunk973693.Y.APP_LAUNCHER_IN_TEXT;

function ea(e) {
  let {
    context: t,
    entrypoint: n,
    searchQuery: a,
    setSearchQuery: o,
    setScroller: s,
    isScrollCloseToBottom: l
  } = e, c = (0, p.e7)([g.Z], () => g.Z.getIsEnabled(), []), u = n === L._b.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(), d = (0, j.Yn)(n), f = !(0, j.Yn)(n), _ = n === L._b.TEXT, [m, b] = ep(true), [y, O] = ep(u), [v, I] = ep(d), [T, S] = ep(f), A = m && y && v && T, C = (d || u) && !A, N = f && c;
  i.useEffect(() => {
    var e;
    let n = "channel" === t.type ? null == (e = t.channel) ? true : e.guild_id : true;
    (0, E.w1)({
      guildId: n,
      force: true
    })
  }, [t]), i.useEffect(() => {
    n === L._b.VOICE && E.ux()
  }, [n]);
  let R = a.length > 0;
  return (0, r.jsxs)("div", {
    className: X.container,
    children: [N ? (0, r.jsx)(eo, {}) : null, (0, r.jsx)(es, {
      searchQuery: a,
      setSearchQuery: o,
      placeholder: _ ? q.intl.string(q.t.ziyFv2) : q.intl.string(q.t["pw+r5b"])
    }), (0, r.jsx)(h.Ttm, {
      ref: s,
      className: X.scrollableContent,
      fade: true,
      children: R ? (0, r.jsx)(W.Z, {
        context: t,
        query: a,
        entrypoint: n,
        isScrollCloseToBottom: l
      }) : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(ec, {
          context: t,
          entrypoint: n,
          onEmptyState: b
        }), u && "channel" === t.type && (0, r.jsx)(ed, {
          context: t,
          onEmptyState: O
        }), d && (0, r.jsx)(ef, {
          context: t,
          entrypoint: n,
          onEmptyState: I
        }), f && (0, r.jsx)(eu, {
          context: t,
          onEmptyState: S
        }), A && (0, r.jsx)(F.A, {
          type: L.LG.HOME_EMPTY,
          textContent: n === L._b.TEXT ? q.intl.string(q.t.iKZctW) : q.intl.string(q.t.RL7Ncg)
        }), C && (0, r.jsx)(H.Z, {})]
      })
    })]
  })
}

function eo() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk729755.developerShelfControlsContainer,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk729755.developerShelfControlsLabel,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.tZ3FNs)
    }), (0, Chunk54381.jsx)(Chunk427996.W, {
      hideSearch: true
    })]
  })
}

function es(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: a
  } = e, s = i.useRef(null), [l, c] = i.useState(false), u = i.useMemo(() => o().debounce(e => {
    (0, v.yw)(K.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: w.Z.entrypoint(),
      location: T.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: false,
    trailing: true
  }), []), d = i.useCallback(() => n(""), [n]), f = i.useCallback(() => {
    c(true), (0, v.yw)(K.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: w.Z.entrypoint(),
      location: T.Vh.APP_LAUNCHER_HOME
    })
  }, []), _ = i.useCallback(() => {
    c(false)
  }, []), p = i.useCallback(e => {
    l || f(), n(e), u(e)
  }, [l, n, f, u]);
  return i.useEffect(() => {
    let e = s.current;
    if (null == e) return;
    let t = () => {
      l || f()
    };
    return e.addEventListener("click", t), () => {
      e.removeEventListener("click", t)
    }
  }, [l, f]), (0, r.jsx)("div", {
    className: X.searchBarContainer,
    children: (0, r.jsx)(h.E1j, {
      ref: s,
      placeholder: a,
      query: t,
      onChange: p,
      onClear: d,
      onFocus: _,
      autoFocus: true
    })
  })
}

function el(e) {
  let {
    apps: t,
    onlyActivityApps: n
  } = e, r = i.useMemo(() => n ? t.map(e => {
    let {
      application: t
    } = e;
    return t.id
  }) : [], [t, n]);
  (0, S.Z)(r)
}

function ec(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: a
  } = e, o = n === L._b.VOICE, {
    frecentApps: s,
    loading: l
  } = (0, x.f)({
    context: t,
    onlyActivityApps: o,
    allowCommandFetch: true,
    includeAuthorizedAppsAndFetch: true
  }), c = i.useMemo(() => {
    let e = [];
    for (let t of s) null != t.application && e.push({
      application: t.application
    });
    return e
  }, [s]), u = q.intl.string(q.t["s+UQpc"]), d = u;
  o && (d = q.intl.string(q.t["2pFD8L"]));
  let {
    items: f,
    handleViewMore: _
  } = eE({
    title: d,
    look: n === L._b.VOICE ? G.U4.LARGE_BANNER : G.U4.ROW,
    items: c,
    limit: et,
    sectionName: L.L3.RECENT_APPS
  });
  i.useEffect(() => {
    l || 0 !== f.length && (0, v.yw)(K.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: f.length,
      section_name: L.L3.RECENT_APPS,
      location: L.G0.HOME,
      source: n
    })
  }, [f.length, n, l]);
  let p = !l && 0 === f.length;
  return (i.useEffect(() => {
    a(p)
  }, [p, a]), el({
    apps: f,
    onlyActivityApps: o
  }), l || p) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(V.Z, {
      title: u,
      buttonType: V.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: _
    }), (0, r.jsx)("div", {
      className: X.sectionContentContainer,
      children: (0, r.jsx)("div", {
        className: X.frecentList,
        children: f.map((e, n) => {
          let {
            application: i
          } = e;
          return o ? (0, r.jsx)(G.qR, {
            context: t,
            application: i,
            look: G.U4.ICON,
            location: L.G0.HOME,
            sectionName: L.L3.RECENT_APPS,
            resultsPosition: n,
            isOneClickCTA: true,
            fetchesApplication: false
          }, i.id) : (0, r.jsx)(G.kA, {
            context: t,
            application: i,
            look: G.U4.ICON,
            location: L.G0.HOME,
            sectionName: L.L3.RECENT_APPS,
            resultsPosition: n
          }, i.id)
        })
      })
    })]
  })
}

function eu(e) {
  var t;
  let {
    context: n,
    onEmptyState: a
  } = e;
  (0, y.g)();
  let o = (0, b.Z)({
      guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
    }),
    s = G.U4.LARGE_BANNER,
    {
      trackSectionImpressionRef: l
    } = (0, Z.Z)({
      sectionName: L.L3.ACTIVITIES,
      numItems: o.length,
      numVisibleItems: o.length
    }),
    c = (0, k.s)(),
    u = 0 === o.length;
  return (i.useEffect(() => {
    a(u)
  }, [a, u]), u) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      ref: e => {
        l.current = e
      },
      children: (0, r.jsx)(V.Z, {
        title: q.intl.string(q.t.shUONg)
      })
    }), (0, r.jsx)("div", {
      className: X.sectionTwoColumnContentContainer,
      children: o.map((e, t) => {
        let {
          application: i
        } = e;
        return (0, r.jsx)(G.qR, {
          context: n,
          application: i,
          look: s,
          location: T.Vh.APP_LAUNCHER_HOME,
          sectionName: L.L3.ACTIVITIES,
          resultsPosition: t,
          sectionOverallPosition: 0,
          isOneClickCTA: !c,
          fetchesApplication: false
        }, i.id)
      })
    })]
  })
}

function ed(e) {
  let {
    context: t,
    onEmptyState: n
  } = e, a = L.L3.APPS_IN_THIS_SERVER, {
    appsInThisServer: o,
    isLoading: s
  } = (0, M.Z)({
    context: t
  }), {
    items: l,
    handleViewMore: c
  } = eE({
    title: q.intl.string(q.t.KfkuGc),
    look: G.U4.ROW,
    items: o,
    limit: J,
    sectionName: a
  }), {
    trackSectionImpressionRef: u
  } = (0, Z.Z)({
    sectionName: a,
    numItems: o.length,
    numVisibleItems: l.length
  }), d = !s && 0 === l.length;
  return (i.useEffect(() => {
    n(d)
  }, [d, n]), d) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      ref: e => {
        u.current = e
      },
      children: (0, r.jsx)(V.Z, {
        title: q.intl.string(q.t.KfkuGc),
        buttonType: V.Z.buttonTypes.VIEW_MORE,
        onClickViewButton: c
      })
    }), (0, r.jsx)("div", {
      className: X.sectionRowsContentContainer,
      children: s ? en.map(e => (0, r.jsx)(B.Z, {
        look: G.U4.ROW
      }, e)) : l.map((e, n) => {
        let {
          application: i
        } = e;
        return null != i ? (0, r.jsx)(G.kA, {
          context: t,
          application: i,
          look: G.U4.ROW,
          sectionName: a,
          resultsPosition: n,
          location: T.Vh.APP_LAUNCHER_HOME
        }, i.id) : null
      })
    })]
  })
}

function ef(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: a
  } = e, {
    fetchState: o,
    recommendationsSections: s,
    isInstallOnDemand: l
  } = em({
    context: t,
    entrypoint: n
  }), c = eg({
    context: t,
    recommendationsSections: s
  }), u = o === N.M.FETCHING, d = !u && 0 === s.length;
  return (i.useEffect(() => {
    a(d)
  }, [d, a]), d) ? null : u ? er.map((e, t) => {
    let {
      cards: n,
      look: i
    } = e;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(V.Z.Loading, {}), (0, r.jsx)("div", {
        className: i === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
        children: n.map(e => (0, r.jsx)(B.Z, {
          look: i
        }, e))
      })]
    }, t)
  }) : s.map((e, n) => (0, r.jsx)(e_, {
    recommendationsSection: e,
    remainingActivities: c,
    isInstallOnDemand: l,
    position: n,
    context: t
  }, e.id))
}

function e_(e) {
  let t, n, {
      recommendationsSection: a,
      remainingActivities: o,
      isInstallOnDemand: s,
      position: u,
      context: p
    } = e,
    h = a.title;
  switch (a.type) {
    case f.o.BANNER_CARDS:
      t = G.U4.LARGE_BANNER;
      break;
    case f.o.SMALL_BANNER_CARDS:
      t = G.U4.MEDIUM_BANNER;
      break;
    default:
      t = G.U4.ROW
  }
  let m = i.useMemo(() => {
      let e = a.application_directory_collection_items.map(e => {
        if (e.type === d.C.APPLICATION) return {
          collectionItemId: e.id,
          collectionItemImageHash: e.image_hash,
          showsPromoted: (0, _.yE)(e.flags, c.q.PROMOTED),
          application: e.application,
          installOnDemand: s(e.application)
        }
      }).filter(D.lm);
      return (0, _.yE)(a.flags, l.b.APPENDS_REMAINING_ACTIVITIES) && e.push(...o.map(e => {
        let {
          application: t
        } = e;
        return {
          collectionItemId: true,
          collectionItemImageHash: true,
          showsPromoted: false,
          application: t,
          installOnDemand: true
        }
      })), e
    }, [s, a.application_directory_collection_items, a.flags, o]),
    g = a.title;
  switch (a.type) {
    case f.o.BANNER_CARDS:
    case f.o.SMALL_BANNER_CARDS:
      n = ee;
      break;
    case f.o.EXPANDABLE_LIST:
    default:
      n = $
  }
  let {
    items: E,
    handleViewMore: b
  } = eE({
    title: h,
    look: t,
    items: m,
    limit: n,
    sectionName: g,
    sectionOverallPosition: u
  }), {
    trackSectionImpressionRef: y
  } = (0, Z.Z)({
    sectionName: g,
    numItems: m.length,
    numVisibleItems: E.length
  }), O = a.type !== f.o.SMALL_BANNER_CARDS;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      ref: e => {
        y.current = e
      },
      children: (0, r.jsx)(V.Z, {
        title: a.title,
        buttonType: V.Z.buttonTypes.VIEW_MORE,
        onClickViewButton: b
      })
    }), (0, r.jsx)("div", {
      className: t === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
      children: E.map((e, n) => {
        let i, {
          collectionItemId: a,
          collectionItemImageHash: o,
          application: s,
          installOnDemand: l,
          showsPromoted: c
        } = e;
        return null != a && null != o && (i = (0, R.$_)({
          itemId: a,
          hash: o,
          containerWidth: Y.Gy
        })), (0, r.jsx)(G.kA, {
          context: p,
          application: s,
          look: t,
          sectionName: g,
          resultsPosition: n,
          location: T.Vh.APP_LAUNCHER_HOME,
          installOnDemand: l,
          enableVideoBanner: O,
          sectionOverallPosition: u,
          overrideImageUrl: i,
          showsPromoted: c
        }, "".concat(n, "-").concat(s.id))
      })
    })]
  })
}

function ep(e) {
  let [t, n] = i.useState(!e);
  return [t, i.useCallback(function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    n(e)
  }, [])]
}

function eh() {
  let e = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.onlyShowPreviewAppCollections),
    t = Chunk568100.Z.getCurrentConfig({
      location: "App Launcher Home (Web)"
    }, {
      autoTrackExposure: false
    }).enabled;
  return module ? Chunk535655.E.PREVIEW : exports ? Chunk535655.E.NON_STAFF_PREVIEW : Chunk535655.E.ACTIVE
}

function em(e) {
  let {
    context: t,
    entrypoint: n
  } = e, r = eh();
  i.useEffect(() => {
    (0, C.XK)({
      surface: ei,
      activeState: r
    })
  }, [r]);
  let {
    sectionDescriptors: a
  } = I.wi({
    context: t,
    filters: {
      commandTypes: [m.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: z.tn,
      includeFrecency: true
    },
    allowFetch: true
  }), o = i.useCallback(e => null == a.find(t => t.id === e.id), [a]), s = (0, p.e7)([N.Z], () => N.Z.getFetchState({
    surface: ei,
    activeState: r
  })), l = (0, p.e7)([N.Z], () => N.Z.getCollections({
    surface: ei,
    activeState: r
  })), c = n === L._b.VOICE;
  return {
    fetchState: s,
    recommendationsSections: i.useMemo(() => c ? (0, j.pF)(l) : l, [l, c]),
    isInstallOnDemand: o
  }
}

function eg(e) {
  var t;
  let {
    context: n,
    recommendationsSections: r
  } = e;
  (0, y.g)();
  let a = (0, b.Z)({
    guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
  });
  return i.useMemo(() => {
    if (!r.some(e => (0, _.yE)(e.flags, l.b.APPENDS_REMAINING_ACTIVITIES))) return Q;
    let e = new Set;
    return r.forEach(t => {
      t.application_directory_collection_items.forEach(t => {
        t.type === d.C.APPLICATION && e.add(t.application.id)
      })
    }), a.filter(t => !e.has(t.application.id))
  }, [r, a])
}

function eE(e) {
  let {
    title: t,
    look: n,
    items: r,
    limit: a,
    sectionName: o,
    sectionOverallPosition: s
  } = e, {
    pushHistory: l
  } = (0, U.hH)();
  return i.useMemo(() => r.length <= a ? {
    items: r,
    handleViewMore: true
  } : {
    items: r.slice(0, a),
    handleViewMore: () => {
      (0, v.yw)(K.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: o,
        source: w.Z.entrypoint(),
        num: r.length
      }), l({
        type: U.gc.LIST,
        title: t,
        look: n,
        items: r,
        sectionName: o,
        sectionOverallPosition: s
      })
    }
  }, [r, a, o, l, t, n, s])
}