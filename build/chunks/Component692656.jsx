/** Chunk was on 35755 **/
/** chunk id: 692656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk595050 = require("./595050.js");
let J = [],
  K = [, , , , ].fill(0).map((e, t) => t),
  $ = [{
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.MEDIUM_BANNER
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.ROW
  }, {
    cards: [, , , , ].fill(0).map((e, t) => t),
    look: Chunk98880.U4.ROW
  }],
  ee = Chunk973693.Y.APP_LAUNCHER_IN_TEXT;

function et(e) {
  let {
    context: t,
    entrypoint: n,
    searchQuery: r,
    setSearchQuery: a,
    setScroller: o,
    isScrollCloseToBottom: s
  } = e, c = (0, m.e7)([v.Z], () => v.Z.getIsEnabled(), []), u = n === R._b.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(), d = (0, M.Yn)(n), p = !(0, M.Yn)(n), h = n === R._b.TEXT, [g, x] = ec(true), [b, N] = ec(u), [j, C] = ec(d), [E, P] = ec(p), A = g && b && j && E, _ = (d || u) && !A, O = p && c;
  l.useEffect(() => {
    var e;
    let n = "channel" === t.type ? null == (e = t.channel) ? true : e.guild_id : true;
    (0, y.w1)({
      guildId: n,
      force: true
    })
  }, [t]), l.useEffect(() => {
    n === R._b.VOICE && y.ux()
  }, [n]);
  let I = r.length > 0;
  return (0, i.jsxs)("div", {
    className: X.container,
    children: [O ? (0, i.jsx)(en, {}) : null, (0, i.jsx)(ei, {
      searchQuery: r,
      setSearchQuery: a,
      placeholder: h ? Q.intl.string(Q.t.ziyFv2) : Q.intl.string(Q.t["pw+r5b"])
    }), (0, i.jsx)(f.Ttm, {
      ref: o,
      className: X.scrollableContent,
      fade: true,
      children: I ? (0, i.jsx)(G.Z, {
        context: t,
        query: r,
        entrypoint: n,
        isScrollCloseToBottom: s
      }) : (0, i.jsxs)("div", {
        children: [(0, i.jsx)(el, {
          context: t,
          entrypoint: n,
          onEmptyState: x
        }), u && "channel" === t.type && (0, i.jsx)(ea, {
          context: t,
          onEmptyState: N
        }), d && (0, i.jsx)(eo, {
          context: t,
          entrypoint: n,
          onEmptyState: C
        }), p && (0, i.jsx)(er, {
          context: t,
          onEmptyState: P
        }), A && (0, i.jsx)(V.A, {
          type: R.LG.HOME_EMPTY,
          textContent: n === R._b.TEXT ? Q.intl.string(Q.t.iKZctW) : Q.intl.string(Q.t.RL7Ncg)
        }), _ && (0, i.jsx)(F.Z, {})]
      })
    })]
  })
}

function en() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk595050.developerShelfControlsContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk595050.developerShelfControlsLabel,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t.tZ3FNs)
    }), (0, Chunk951288.jsx)(Chunk427996.W, {
      hideSearch: true
    })]
  })
}

function ei(e) {
  let {
    searchQuery: t,
    setSearchQuery: n,
    placeholder: r
  } = e, o = l.useRef(null), [s, c] = l.useState(false), u = l.useMemo(() => a().debounce(e => {
    (0, N.yw)(z.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
      query: e,
      source: L.Z.entrypoint(),
      location: C.Vh.APP_LAUNCHER_HOME
    })
  }, 400, {
    leading: false,
    trailing: true
  }), []), d = l.useCallback(() => n(""), [n]), p = l.useCallback(() => {
    c(true), (0, N.yw)(z.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
      source: L.Z.entrypoint(),
      location: C.Vh.APP_LAUNCHER_HOME
    })
  }, []), m = l.useCallback(() => {
    c(false)
  }, []), h = l.useCallback(e => {
    s || p(), n(e), u(e)
  }, [s, n, p, u]);
  return l.useEffect(() => {
    let e = o.current;
    if (null == e) return;
    let t = () => {
      s || p()
    };
    return e.addEventListener("click", t), () => {
      e.removeEventListener("click", t)
    }
  }, [s, p]), (0, i.jsx)("div", {
    className: X.searchBarContainer,
    children: (0, i.jsx)(f.E1j, {
      ref: o,
      placeholder: r,
      query: t,
      onChange: h,
      onClear: d,
      onFocus: m,
      autoFocus: true
    })
  })
}

function el(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: r
  } = e, a = n === R._b.VOICE, {
    frecentApps: o,
    loading: s
  } = (0, Z.f)({
    context: t,
    onlyActivityApps: a,
    allowCommandFetch: true,
    includeAuthorizedAppsAndFetch: true
  }), c = l.useMemo(() => {
    let e = [];
    for (let t of o) null != t.application && e.push({
      application: t.application
    });
    return e
  }, [o]), u = Q.intl.string(Q.t["s+UQpc"]), d = u;
  a && (d = Q.intl.string(Q.t["2pFD8L"]));
  let {
    items: p,
    handleViewMore: m
  } = eu({
    title: d,
    look: n === R._b.VOICE ? D.U4.LARGE_BANNER : D.U4.ROW,
    items: c,
    limit: 8,
    sectionName: R.L3.RECENT_APPS
  });
  l.useEffect(() => {
    s || 0 !== p.length && (0, N.yw)(z.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
      num: p.length,
      section_name: R.L3.RECENT_APPS,
      location: R.G0.HOME,
      source: n
    })
  }, [p.length, n, s]);
  let f = !s && 0 === p.length;
  return (l.useEffect(() => {
    r(f)
  }, [f, r]), ! function(e) {
    let {
      apps: t,
      onlyActivityApps: n
    } = e, i = l.useMemo(() => n ? t.map(e => {
      let {
        application: t
      } = e;
      return t.id
    }) : [], [t, n]);
    (0, E.Z)(i)
  }({
    apps: p,
    onlyActivityApps: a
  }), s || f) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(W.Z, {
      title: u,
      buttonType: W.Z.buttonTypes.VIEW_MORE,
      onClickViewButton: m
    }), (0, i.jsx)("div", {
      className: X.sectionContentContainer,
      children: (0, i.jsx)("div", {
        className: X.frecentList,
        children: p.map((e, n) => {
          let {
            application: l
          } = e;
          return a ? (0, i.jsx)(D.qR, {
            context: t,
            application: l,
            look: D.U4.ICON,
            location: R.G0.HOME,
            sectionName: R.L3.RECENT_APPS,
            resultsPosition: n,
            isOneClickCTA: true,
            fetchesApplication: false
          }, l.id) : (0, i.jsx)(D.kA, {
            context: t,
            application: l,
            look: D.U4.ICON,
            location: R.G0.HOME,
            sectionName: R.L3.RECENT_APPS,
            resultsPosition: n
          }, l.id)
        })
      })
    })]
  })
}

function er(e) {
  var t;
  let {
    context: n,
    onEmptyState: r
  } = e;
  (0, x.g)();
  let a = (0, g.Z)({
      guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
    }),
    o = D.U4.LARGE_BANNER,
    {
      trackSectionImpressionRef: s
    } = (0, B.Z)({
      sectionName: R.L3.ACTIVITIES,
      numItems: a.length,
      numVisibleItems: a.length
    }),
    c = (0, k.s)(),
    u = 0 === a.length;
  return (l.useEffect(() => {
    r(u)
  }, [r, u]), u) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        s.current = e
      },
      children: (0, i.jsx)(W.Z, {
        title: Q.intl.string(Q.t.shUONg)
      })
    }), (0, i.jsx)("div", {
      className: X.sectionTwoColumnContentContainer,
      children: a.map((e, t) => {
        let {
          application: l
        } = e;
        return (0, i.jsx)(D.qR, {
          context: n,
          application: l,
          look: o,
          location: C.Vh.APP_LAUNCHER_HOME,
          sectionName: R.L3.ACTIVITIES,
          resultsPosition: t,
          sectionOverallPosition: 0,
          isOneClickCTA: !c,
          fetchesApplication: false
        }, l.id)
      })
    })]
  })
}

function ea(e) {
  let {
    context: t,
    onEmptyState: n
  } = e, r = R.L3.APPS_IN_THIS_SERVER, {
    appsInThisServer: a,
    isLoading: o
  } = (0, w.Z)({
    context: t
  }), {
    items: s,
    handleViewMore: c
  } = eu({
    title: Q.intl.string(Q.t.KfkuGc),
    look: D.U4.ROW,
    items: a,
    limit: 4,
    sectionName: r
  }), {
    trackSectionImpressionRef: u
  } = (0, B.Z)({
    sectionName: r,
    numItems: a.length,
    numVisibleItems: s.length
  }), d = !o && 0 === s.length;
  return (l.useEffect(() => {
    n(d)
  }, [d, n]), d) ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        u.current = e
      },
      children: (0, i.jsx)(W.Z, {
        title: Q.intl.string(Q.t.KfkuGc),
        buttonType: W.Z.buttonTypes.VIEW_MORE,
        onClickViewButton: c
      })
    }), (0, i.jsx)("div", {
      className: X.sectionRowsContentContainer,
      children: o ? K.map(e => (0, i.jsx)(H.Z, {
        look: D.U4.ROW
      }, e)) : s.map((e, n) => {
        let {
          application: l
        } = e;
        return null != l ? (0, i.jsx)(D.kA, {
          context: t,
          application: l,
          look: D.U4.ROW,
          sectionName: r,
          resultsPosition: n,
          location: C.Vh.APP_LAUNCHER_HOME
        }, l.id) : null
      })
    })]
  })
}

function eo(e) {
  let {
    context: t,
    entrypoint: n,
    onEmptyState: r
  } = e, {
    fetchState: a,
    recommendationsSections: c,
    isInstallOnDemand: u
  } = function(e) {
    let {
      context: t,
      entrypoint: n
    } = e, i = function() {
      let e = (0, m.e7)([I.default], () => I.default.onlyShowPreviewAppCollections),
        t = P.Z.getCurrentConfig({
          location: "App Launcher Home (Web)"
        }, {
          autoTrackExposure: false
        }).enabled;
      return e ? o.E.PREVIEW : t ? o.E.NON_STAFF_PREVIEW : o.E.ACTIVE
    }();
    l.useEffect(() => {
      (0, A.XK)({
        surface: ee,
        activeState: i
      })
    }, [i]);
    let {
      sectionDescriptors: r
    } = j.wi({
      context: t,
      filters: {
        commandTypes: [h.yU.CHAT]
      },
      options: {
        placeholderCount: 0,
        limit: q.tn,
        includeFrecency: true
      },
      allowFetch: true
    }), a = l.useCallback(e => null == r.find(t => t.id === e.id), [r]), s = (0, m.e7)([_.Z], () => _.Z.getFetchState({
      surface: ee,
      activeState: i
    })), c = (0, m.e7)([_.Z], () => _.Z.getCollections({
      surface: ee,
      activeState: i
    })), u = n === R._b.VOICE;
    return {
      fetchState: s,
      recommendationsSections: l.useMemo(() => u ? (0, M.pF)(c) : c, [c, u]),
      isInstallOnDemand: a
    }
  }({
    context: t,
    entrypoint: n
  }), p = function(e) {
    var t;
    let {
      context: n,
      recommendationsSections: i
    } = e;
    (0, x.g)();
    let r = (0, g.Z)({
      guildId: "channel" === n.type ? null == (t = n.channel) ? true : t.getGuildId() : true
    });
    return l.useMemo(() => {
      if (!i.some(e => (0, S.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return J;
      let e = new Set;
      return i.forEach(t => {
        t.application_directory_collection_items.forEach(t => {
          t.type === d.C.APPLICATION && e.add(t.application.id)
        })
      }), r.filter(t => !e.has(t.application.id))
    }, [i, r])
  }({
    context: t,
    recommendationsSections: c
  }), f = a === _.M.FETCHING, v = !f && 0 === c.length;
  return (l.useEffect(() => {
    r(v)
  }, [v, r]), v) ? null : f ? $.map((e, t) => {
    let {
      cards: n,
      look: l
    } = e;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(W.Z.Loading, {}), (0, i.jsx)("div", {
        className: l === D.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
        children: n.map(e => (0, i.jsx)(H.Z, {
          look: l
        }, e))
      })]
    }, t)
  }) : c.map((e, n) => (0, i.jsx)(es, {
    recommendationsSection: e,
    remainingActivities: p,
    isInstallOnDemand: u,
    position: n,
    context: t
  }, e.id))
}

function es(e) {
  let t, n, {
      recommendationsSection: r,
      remainingActivities: a,
      isInstallOnDemand: o,
      position: u,
      context: m
    } = e,
    f = r.title;
  switch (r.type) {
    case p.o.BANNER_CARDS:
      t = D.U4.LARGE_BANNER;
      break;
    case p.o.SMALL_BANNER_CARDS:
      t = D.U4.MEDIUM_BANNER;
      break;
    default:
      t = D.U4.ROW
  }
  let h = l.useMemo(() => {
      let e = r.application_directory_collection_items.map(e => {
        if (e.type === d.C.APPLICATION) return {
          collectionItemId: e.id,
          collectionItemImageHash: e.image_hash,
          showsPromoted: (0, S.yE)(e.flags, c.q.PROMOTED),
          application: e.application,
          installOnDemand: o(e.application)
        }
      }).filter(T.lm);
      return (0, S.yE)(r.flags, s.b.APPENDS_REMAINING_ACTIVITIES) && e.push(...a.map(e => {
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
    }, [o, r.application_directory_collection_items, r.flags, a]),
    v = r.title;
  switch (r.type) {
    case p.o.BANNER_CARDS:
    case p.o.SMALL_BANNER_CARDS:
      n = 6;
      break;
    case p.o.EXPANDABLE_LIST:
    default:
      n = 4
  }
  let {
    items: y,
    handleViewMore: g
  } = eu({
    title: f,
    look: t,
    items: h,
    limit: n,
    sectionName: v,
    sectionOverallPosition: u
  }), {
    trackSectionImpressionRef: x
  } = (0, B.Z)({
    sectionName: v,
    numItems: h.length,
    numVisibleItems: y.length
  }), b = r.type !== p.o.SMALL_BANNER_CARDS;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        x.current = e
      },
      children: (0, i.jsx)(W.Z, {
        title: r.title,
        buttonType: W.Z.buttonTypes.VIEW_MORE,
        onClickViewButton: g
      })
    }), (0, i.jsx)("div", {
      className: t === D.U4.ROW ? X.sectionRowsContentContainer : X.sectionTwoColumnContentContainer,
      children: y.map((e, n) => {
        let l, {
          collectionItemId: r,
          collectionItemImageHash: a,
          application: o,
          installOnDemand: s,
          showsPromoted: c
        } = e;
        return null != r && null != a && (l = (0, O.$_)({
          itemId: r,
          hash: a,
          containerWidth: Y.Gy
        })), (0, i.jsx)(D.kA, {
          context: m,
          application: o,
          look: t,
          sectionName: v,
          resultsPosition: n,
          location: C.Vh.APP_LAUNCHER_HOME,
          installOnDemand: s,
          enableVideoBanner: b,
          sectionOverallPosition: u,
          overrideImageUrl: l,
          showsPromoted: c
        }, "".concat(n, "-").concat(o.id))
      })
    })]
  })
}

function ec(e) {
  let [t, n] = l.useState(!e);
  return [t, l.useCallback(function() {
    let e = !(arguments.length > 0) || true === arguments[0] || arguments[0];
    n(e)
  }, [])]
}

function eu(e) {
  let {
    title: t,
    look: n,
    items: i,
    limit: r,
    sectionName: a,
    sectionOverallPosition: o
  } = e, {
    pushHistory: s
  } = (0, U.hH)();
  return l.useMemo(() => i.length <= r ? {
    items: i,
    handleViewMore: true
  } : {
    items: i.slice(0, r),
    handleViewMore: () => {
      (0, N.yw)(z.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
        section_name: a,
        source: L.Z.entrypoint(),
        num: i.length
      }), s({
        type: U.gc.LIST,
        title: t,
        look: n,
        items: i,
        sectionName: a,
        sectionOverallPosition: o
      })
    }
  }, [i, r, a, s, t, n, o])
}