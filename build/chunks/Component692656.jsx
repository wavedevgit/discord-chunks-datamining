/** Chunk was on web.js **/
/** chunk id: 692656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk535655 = require("./535655.js"),
  Chunk754738 = require("./754738.js"),
  Chunk727241 = require("./727241.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk873199 = require("./873199.js"),
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
  Chunk630388 = require("./630388.js"),
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
  Chunk997438 = require("./997438.js");
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

function eo(e) {
  let {
    context: t,
    entrypoint: n,
    searchQuery: o,
    setSearchQuery: a,
    setScroller: s,
    isScrollCloseToBottom: l
  } = e, c = (0, _.e7)([m.Z], () => m.Z.getIsEnabled(), []), u = n === L._b.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(), d = (0, k.Yn)(n), f = !(0, k.Yn)(n), h = n === L._b.TEXT, [E, b] = ep(true), [y, O] = ep(u), [v, I] = ep(d), [T, S] = ep(f), A = E && y && v && T, N = (d || u) && !A, C = f && c;
  i.useEffect(() => {
    var e;
    let n = "channel" === t.type ? null == (e = t.channel) ? true : e.guild_id : true;
    (0, g.w1)({
      guildId: n,
      force: true
    })
  }, [t]), i.useEffect(() => {
    n === L._b.VOICE && g.ux()
  }, [n]);
  let R = o.length > 0;
  return (0, r.jsxs)("div", {
    className: X.container,
    children: [C ? (0, r.jsx)(ea, {}) : null, (0, r.jsx)(es, {
      searchQuery: o,
      setSearchQuery: a,
      placeholder: h ? q.intl.string(q.t.ziyFv7) : q.intl.string(q.t["pw+r5e"])
    }), (0, r.jsx)(p.Ttm, {
      ref: s,
      className: X.scrollableContent,
      fade: true,
      children: R ? (0, r.jsx)(Y.Z, {
        context: t,
        query: o,
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
          textContent: n === L._b.TEXT ? q.intl.string(q.t.iKZctb) : q.intl.string(q.t.RL7Ncn)
        }), N && (0, r.jsx)(H.Z, {})]
      })
    })]
  })
}

function ea() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk997438.developerShelfControlsContainer,
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk997438.developerShelfControlsLabel,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.tZ3FNj)
    }), (0, Chunk255367.jsx)(Chunk427996.W, {
      hideSearch: true
    })]
  })
}

function es(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: o
  } = e, s = i.useRef(null), [l, c] = i.useState(false), u = i.useMemo(() => a().debounce(e => {
    (0, O.yw)(K.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: D.Z.entrypoint(),
      location: I.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: false,
    trailing: true
  }), []), d = i.useCallback(() => n(""), [n]), f = i.useCallback(() => {
    c(true), (0, O.yw)(K.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: D.Z.entrypoint(),
      location: I.Vh.APP_LAUNCHER_HOME
    })
  }, []), _ = i.useCallback(() => {
    c(false)
  }, []), h = i.useCallback(e => {
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
    children: (0, r.jsx)(p.E1j, {
      ref: e => {
        var t;
        s.current = null != (t = null == e ? true : e.containerRef.current) ? t : null
      },
      placeholder: o,
      query: t,
      onChange: h,
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
  (0, T.Z)(r)
}

function ec(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: o
  } = e, a = n === L._b.VOICE, {
    frecentApps: s,
    loading: l
  } = (0, x.f)({
    context: t,
    onlyActivityApps: a,
    allowCommandFetch: true,
    includeAuthorizedAppsAndFetch: true
  }), c = i.useMemo(() => {
    let e = [];
    for (let t of s) null != t.application && e.push({
      application: t.application
    });
    return e
  }, [s]), u = q.intl.string(q.t["s+UQpa"]), d = u;
  a && (d = q.intl.string(q.t["2pFD8P"]));
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
    l || 0 !== f.length && (0, O.yw)(K.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: f.length,
      section_name: L.L3.RECENT_APPS,
      location: L.G0.HOME,
      source: n
    })
  }, [f.length, n, l]);
  let p = !l && 0 === f.length;
  return (i.useEffect(() => {
    o(p)
  }, [p, o]), el({
    apps: f,
    onlyActivityApps: a
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
          return a ? (0, r.jsx)(G.qR, {
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
    onEmptyState: o
  } = e;
  (0, b.g)();
  let a = (0, E.Z)({
      guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
    }),
    s = G.U4.LARGE_BANNER,
    {
      trackSectionImpressionRef: l
    } = (0, Z.Z)({
      sectionName: L.L3.ACTIVITIES,
      numItems: a.length,
      numVisibleItems: a.length
    }),
    c = (0, j.s)(),
    u = 0 === a.length;
  return (i.useEffect(() => {
    o(u)
  }, [o, u]), u) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      ref: e => {
        l.current = e
      },
      children: (0, r.jsx)(V.Z, {
        title: q.intl.string(q.t.shUONj)
      })
    }), (0, r.jsx)("div", {
      className: X.sectionTwoColumnContentContainer,
      children: a.map((e, t) => {
        let {
          application: i
        } = e;
        return (0, r.jsx)(G.qR, {
          context: n,
          application: i,
          look: s,
          location: I.Vh.APP_LAUNCHER_HOME,
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
  } = e, o = L.L3.APPS_IN_THIS_SERVER, {
    appsInThisServer: a,
    isLoading: s
  } = (0, M.Z)({
    context: t
  }), {
    items: l,
    handleViewMore: c
  } = eE({
    title: q.intl.string(q.t.KfkuGR),
    look: G.U4.ROW,
    items: a,
    limit: J,
    sectionName: o
  }), {
    trackSectionImpressionRef: u
  } = (0, Z.Z)({
    sectionName: o,
    numItems: a.length,
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
        title: q.intl.string(q.t.KfkuGR),
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
          sectionName: o,
          resultsPosition: n,
          location: I.Vh.APP_LAUNCHER_HOME
        }, i.id) : null
      })
    })]
  })
}

function ef(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: o
  } = e, {
    fetchState: a,
    recommendationsSections: s,
    isInstallOnDemand: l
  } = em({
    context: t,
    entrypoint: n
  }), c = eg({
    context: t,
    recommendationsSections: s
  }), u = a === N.M.FETCHING, d = !u && 0 === s.length;
  return (i.useEffect(() => {
    o(d)
  }, [d, o]), d) ? null : u ? er.map((e, t) => {
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
      recommendationsSection: o,
      remainingActivities: a,
      isInstallOnDemand: s,
      position: u,
      context: _
    } = e,
    p = o.title;
  switch (o.type) {
    case f.o.BANNER_CARDS:
      t = G.U4.LARGE_BANNER;
      break;
    case f.o.SMALL_BANNER_CARDS:
      t = G.U4.MEDIUM_BANNER;
      break;
    default:
      t = G.U4.ROW
  }
  let h = i.useMemo(() => {
      let e = o.application_directory_collection_items.map(e => {
        if (e.type === d.C.APPLICATION) return {
          collectionItemId: e.id,
          collectionItemImageHash: e.image_hash,
          showsPromoted: (0, P.yE)(e.flags, c.q.PROMOTED),
          application: e.application,
          installOnDemand: s(e.application)
        }
      }).filter(w.lm);
      return (0, P.yE)(o.flags, l.b.APPENDS_REMAINING_ACTIVITIES) && e.push(...a.map(e => {
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
    }, [s, o.application_directory_collection_items, o.flags, a]),
    m = o.title;
  switch (o.type) {
    case f.o.BANNER_CARDS:
    case f.o.SMALL_BANNER_CARDS:
      n = ee;
      break;
    case f.o.EXPANDABLE_LIST:
    default:
      n = $
  }
  let {
    items: g,
    handleViewMore: E
  } = eE({
    title: p,
    look: t,
    items: h,
    limit: n,
    sectionName: m,
    sectionOverallPosition: u
  }), {
    trackSectionImpressionRef: b
  } = (0, Z.Z)({
    sectionName: m,
    numItems: h.length,
    numVisibleItems: g.length
  }), y = o.type !== f.o.SMALL_BANNER_CARDS;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      ref: e => {
        b.current = e
      },
      children: (0, r.jsx)(V.Z, {
        title: o.title,
        buttonType: V.Z.buttonTypes.VIEW_MORE,
        onClickViewButton: E
      })
    }), (0, r.jsx)("div", {
      className: t === G.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
      children: g.map((e, n) => {
        let i, {
          collectionItemId: o,
          collectionItemImageHash: a,
          application: s,
          installOnDemand: l,
          showsPromoted: c
        } = e;
        return null != o && null != a && (i = (0, C.$_)({
          itemId: o,
          hash: a,
          containerWidth: W.Gy
        })), (0, r.jsx)(G.kA, {
          context: _,
          application: s,
          look: t,
          sectionName: m,
          resultsPosition: n,
          location: I.Vh.APP_LAUNCHER_HOME,
          installOnDemand: l,
          enableVideoBanner: y,
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
    (0, A.XK)({
      surface: ei,
      activeState: r
    })
  }, [r]);
  let {
    sectionDescriptors: o
  } = v.wi({
    context: t,
    filters: {
      commandTypes: [h.yU.CHAT]
    },
    options: {
      placeholderCount: 0,
      limit: z.tn,
      includeFrecency: true
    },
    allowFetch: true
  }), a = i.useCallback(e => null == o.find(t => t.id === e.id), [o]), s = (0, _.e7)([N.Z], () => N.Z.getFetchState({
    surface: ei,
    activeState: r
  })), l = (0, _.e7)([N.Z], () => N.Z.getCollections({
    surface: ei,
    activeState: r
  })), c = n === L._b.VOICE;
  return {
    fetchState: s,
    recommendationsSections: i.useMemo(() => c ? (0, k.pF)(l) : l, [l, c]),
    isInstallOnDemand: a
  }
}

function eg(e) {
  var t;
  let {
    context: n,
    recommendationsSections: r
  } = e;
  (0, b.g)();
  let o = (0, E.Z)({
    guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
  });
  return i.useMemo(() => {
    if (!r.some(e => (0, P.yE)(e.flags, l.b.APPENDS_REMAINING_ACTIVITIES))) return Q;
    let e = new Set;
    return r.forEach(t => {
      t.application_directory_collection_items.forEach(t => {
        t.type === d.C.APPLICATION && e.add(t.application.id)
      })
    }), o.filter(t => !e.has(t.application.id))
  }, [r, o])
}

function eE(e) {
  let {
    title: t,
    look: n,
    items: r,
    limit: o,
    sectionName: a,
    sectionOverallPosition: s
  } = e, {
    pushHistory: l
  } = (0, U.hH)();
  return i.useMemo(() => r.length <= o ? {
    items: r,
    handleViewMore: true
  } : {
    items: r.slice(0, o),
    handleViewMore: () => {
      (0, O.yw)(K.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: a,
        source: D.Z.entrypoint(),
        num: r.length
      }), l({
        type: U.gc.LIST,
        title: t,
        look: n,
        items: r,
        sectionName: a,
        sectionOverallPosition: s
      })
    }
  }, [r, o, a, l, t, n, s])
}