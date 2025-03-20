/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => D,
  j: () => T
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(852860),
  o = n(111028),
  A = n(977258),
  c = n(45966),
  d = n(473403),
  u = n(454585),
  g = n(323502),
  f = n(958832),
  m = n(324067),
  p = n(984933),
  h = n(259580),
  C = n(999382),
  b = n(743475),
  v = n(889369),
  x = n(570961),
  N = n(208665),
  j = n(868814),
  E = n(974513),
  I = n(2348),
  O = n(353890),
  y = n(716130),
  w = n(388032),
  P = n(593601);

function B(e) {
  let {
    guild: t
  } = e, l = (0, s.e7)([c.Z], () => c.Z.getEnabled(t.id)), m = (0, s.e7)([f.Z], () => f.Z.hasFetched(t.id)), p = (0, j.Z)(t), h = (0, s.e7)([v.Z], () => v.Z.editedDefaultChannelIds), C = p.filter(e => !h.has(e.id)), [x, N] = i.useState(!1);
  i.useEffect(() => {
    m || l || (0, g.S)(t.id)
  }, [t.id, m, l]);
  let E = e => {
    (0, a.ZDy)(async () => {
      let {
        default: i
      } = await n.e("35641").then(n.bind(n, 89216));
      return n => {
        var s, a;
        return (0, r.jsx)(i, (s = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, n), a = a = {
          guildId: t.id,
          startingChannelId: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e))
        }), s))
      }
    })
  };
  return x || 0 === C.length ? null : (0, r.jsxs)("div", {
    className: P.recommendations,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: w.NW.string(w.t.NN7rDw)
    }), (0, r.jsxs)("div", {
      className: P.recsSubheader,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: w.NW.string(w.t["3Uuql5"])
      }), (0, r.jsxs)(a.P3F, {
        className: P.dismissAll,
        onClick: () => N(!0),
        children: [(0, r.jsx)(a.dz2, {
          size: "xxs",
          color: "currentColor",
          className: P.checkmark
        }), (0, r.jsx)(a.Text, {
          className: P.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: w.NW.string(w.t.ZC3PJy)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: P.recommendedChannels,
      children: C.map((e, n) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: P.channelRow,
          children: [(0, r.jsxs)("div", {
            className: P.channelInfo,
            children: [(0, r.jsxs)("div", {
              className: P.channelName,
              children: [(0, r.jsx)(d._W, {
                channel: e,
                guild: t
              }), (0, r.jsx)(o.Z, {
                className: P.__invalid_name,
                children: (0, r.jsx)(a.Text, {
                  className: P.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-normal",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, r.jsx)(o.Z, {
              children: (0, r.jsx)(a.Text, {
                className: P.topic,
                variant: "text-xs/normal",
                children: u.Z.parseTopic(e.topic, !0, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, A.s)(t.id, e.id) ? (0, r.jsx)(a.zxk, {
            color: a.zxk.Colors.BRAND,
            size: a.zxk.Sizes.SMALL,
            className: P.addChannelCTA,
            onClick: () => (0, b.pt)(e.id),
            children: w.NW.string(w.t.OYkgVl)
          }) : (0, r.jsxs)(a.zxk, {
            look: a.zxk.Looks.OUTLINED,
            color: a.zxk.Colors.PRIMARY,
            className: P.lockedPill,
            innerClassName: P.lockedPillInner,
            onClick: () => E(e.id),
            children: [(0, r.jsx)(a.mBM, {
              size: "xs",
              color: "currentColor"
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/medium",
              children: w.NW.string(w.t.zA9d1N)
            })]
          })]
        }), n < C.length - 1 ? (0, r.jsx)("div", {
          className: P.separator
        }) : null]
      }))
    }), (0, r.jsx)("div", {
      className: P.largeSeparator
    })]
  })
}

function D(e) {
  let {
    saveOnClose: t = !1
  } = e, n = (0, s.e7)([C.Z], () => C.Z.getGuild()), l = (0, s.e7)([c.Z], () => c.Z.isLoading()), o = (0, s.e7)([p.ZP], () => p.ZP.getChannels(null == n ? void 0 : n.id)), A = (0, s.e7)([m.Z], () => m.Z.getCategories(null == n ? void 0 : n.id)), d = (0, s.e7)([N.Z], () => N.Z.advancedMode), u = i.useRef(null), [g, f] = i.useState(!1), v = i.useRef(n);
  return (i.useEffect(() => {
    v.current = n
  }), i.useEffect(() => {
    if (t) {
      let {
        current: e
      } = v;
      return () => {
        null != e && (0, b.DO)(e).then(() => {
          d && (0, x.rS)(e, {
            ignoreDefaultPrompt: !0
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }, [t, d]), null == n) ? null : l ? (0, r.jsx)(a.$jN, {}) : (0, r.jsxs)("div", {
    className: P.columns,
    children: [(0, r.jsxs)("div", {
      className: P.channelBrowser,
      children: [(0, r.jsx)(a.P3F, {
        className: P.collapseButton,
        onClick: () => f(e => !e),
        children: (0, r.jsx)(h.Z, {
          direction: g ? h.Z.Directions.DOWN : h.Z.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(a.X6q, {
        className: P.header,
        variant: "heading-lg/extrabold",
        children: w.NW.string(w.t["4GSygo"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: w.NW.string(w.t.Kq7FAQ)
      }), (0, r.jsx)(E.Wu, {
        className: P.advancedModeToggle,
        guildId: n.id
      }), g ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(B, {
          guild: n
        }), (0, r.jsx)(I.Z, {
          className: P.channelBrowserOuter,
          guild: n,
          categories: A,
          channels: o,
          hasSidebar: !1
        })]
      }), d && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: P.largeSeparator
        }), (0, r.jsx)(a.X6q, {
          className: P.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: w.NW.string(w.t.g2Rnpa)
        }), (0, r.jsx)(a.Text, {
          className: P.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: w.NW.string(w.t.bLDQ1d)
        }), (0, r.jsx)("div", {
          ref: u,
          className: P.advancedModeQuestions,
          children: (0, r.jsx)(y.Z, {
            guildId: n.id,
            prejoinOnly: !0,
            includeCount: !0,
            singleColumn: !0
          })
        })]
      })]
    }), (0, r.jsx)(O.Z, {
      guild: n,
      scrollToQuestions: () => {
        null != u.current && u.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function T() {
  let e = (0, s.e7)([C.Z], () => C.Z.getProps().guild),
    t = (0, s.e7)([v.Z], () => v.Z.submitting),
    n = (0, s.e7)([N.Z], () => N.Z.advancedMode);
  return null == e ? null : (0, r.jsx)(l.Z, {
    onSave: () => {
      (0, b.DO)(e).then(() => {
        n && (0, x.rS)(e, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: b.BG,
    submitting: t,
    onSaveText: w.NW.string(w.t.R3BPHx)
  })
}