/** Chunk was on 64982 **/
/** chunk id: 729311, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => Z,
  j: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk977258 = require("./977258.js"),
  Chunk45966 = require("./45966.js"),
  Chunk473403 = require("./473403.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk323502 = require("./323502.js"),
  Chunk958832 = require("./958832.js"),
  Chunk324067 = require("./324067.js"),
  Chunk984933 = require("./984933.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk743475 = require("./743475.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk868814 = require("./868814.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk2348 = require("./2348.jsx"),
  Chunk353890 = require("./353890.jsx"),
  Chunk716130 = require("./716130.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk868893 = require("./868893.js"),
  Chunk430864 = require("./430864.js");

function w(e) {
  let {
    guild: t
  } = e, o = (0, l.e7)([d.Z], () => d.Z.getEnabled(t.id)), f = (0, l.e7)([p.Z], () => p.Z.hasFetched(t.id)), h = (0, O.Z)(t), b = (0, l.e7)([v.Z], () => v.Z.editedDefaultChannelIds), x = h.filter(e => !b.has(e.id)), [_, C] = i.useState(false);
  return (i.useEffect(() => {
    f || o || (0, m.S)(t.id)
  }, [t.id, f, o]), _ || 0 === x.length) ? null : (0, r.jsxs)("div", {
    className: T.recommendations,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: S.intl.string(S.t.NN7rD3)
    }), (0, r.jsxs)("div", {
      className: T.recsSubheader,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: S.intl.string(S.t["3Uuql+"])
      }), (0, r.jsxs)(s.P3F, {
        className: T.dismissAll,
        onClick: () => C(true),
        children: [(0, r.jsx)(s.dz2, {
          size: "xxs",
          color: "currentColor",
          className: T.checkmark
        }), (0, r.jsx)(s.Text, {
          className: T.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: S.intl.string(S.t.ZC3PJ2)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: T.recommendedChannels,
      children: x.map((e, i) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: T.channelRow,
          children: [(0, r.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, r.jsxs)("div", {
              className: T.channelName,
              children: [(0, r.jsx)(u._W, {
                channel: e,
                guild: t
              }), (0, r.jsx)(a.Z, {
                className: T.__invalid_name,
                children: (0, r.jsx)(s.Text, {
                  className: T.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-default",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, r.jsx)(a.Z, {
              className: P.markup,
              children: (0, r.jsx)(s.Text, {
                className: T.topic,
                variant: "text-xs/normal",
                children: g.Z.parseTopic(e.topic, true, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, c.s)(t.id, e.id) ? (0, r.jsx)(s.Button, {
            size: "sm",
            variant: "primary",
            text: S.intl.string(S.t.OYkgVk),
            onClick: () => (0, j.pt)(e.id)
          }) : (0, r.jsx)(s.Button, {
            size: "sm",
            variant: "secondary",
            text: S.intl.string(S.t.zA9d1J),
            icon: s.mBM,
            iconPosition: "start",
            onClick: () => {
              var i;
              return i = e.id, void(0, s.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("35641").then(n.bind(n, 89216));
                return n => {
                  var l, a;
                  return (0, r.jsx)(e, (l = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: true,
                          configurable: true,
                          writable: true
                        }) : e[t] = r
                      })
                    }
                    return e
                  }({}, n), a = a = {
                    guildId: t.id,
                    startingChannelId: i
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(a)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                  }), l))
                }
              })
            }
          })]
        }), i < x.length - 1 ? (0, r.jsx)("div", {
          className: T.separator
        }) : null]
      }))
    }), (0, r.jsx)("div", {
      className: T.largeSeparator
    })]
  })
}

function Z(e) {
  let {
    saveOnClose: t = false
  } = e, n = (0, l.e7)([x.Z], () => x.Z.getGuild()), a = (0, l.e7)([d.Z], () => d.Z.isLoading()), o = (0, l.e7)([h.ZP], () => h.ZP.getChannels(null == n ? true : n.id)), c = (0, l.e7)([f.Z], () => f.Z.getCategories(null == n ? true : n.id)), u = (0, l.e7)([C.Z], () => C.Z.advancedMode), g = i.useRef(null), [m, p] = i.useState(false), v = i.useRef(n);
  return (i.useEffect(() => {
    v.current = n
  }), i.useEffect(() => {
    if (t) {
      let {
        current: e
      } = v;
      return () => {
        null != e && (0, j.DO)(e).then(() => {
          u && (0, _.rS)(e, {
            ignoreDefaultPrompt: true
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }, [t, u]), null == n) ? null : a ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)("div", {
    className: T.columns,
    children: [(0, r.jsxs)("div", {
      className: T.channelBrowser,
      children: [(0, r.jsx)(s.P3F, {
        className: T.collapseButton,
        onClick: () => p(e => !e),
        children: (0, r.jsx)(b.Z, {
          direction: m ? b.Z.Directions.DOWN : b.Z.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(s.Heading, {
        className: T.header,
        variant: "heading-lg/extrabold",
        children: S.intl.string(S.t["4GSygh"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: S.intl.string(S.t.Kq7FAS)
      }), (0, r.jsx)(y.Wu, {
        className: T.advancedModeToggle,
        guildId: n.id
      }), m ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(w, {
          guild: n
        }), (0, r.jsx)(E.Z, {
          className: T.channelBrowserOuter,
          guild: n,
          categories: c,
          channels: o,
          hasSidebar: false
        })]
      }), u && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: T.largeSeparator
        }), (0, r.jsx)(s.Heading, {
          className: T.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: S.intl.string(S.t.g2RnpV)
        }), (0, r.jsx)(s.Text, {
          className: T.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: S.intl.string(S.t.bLDQ1Q)
        }), (0, r.jsx)("div", {
          ref: g,
          className: T.advancedModeQuestions,
          children: (0, r.jsx)(I.Z, {
            guildId: n.id,
            prejoinOnly: true,
            includeCount: true,
            singleColumn: true
          })
        })]
      })]
    }), (0, r.jsx)(N.Z, {
      guild: n,
      scrollToQuestions: () => {
        null != g.current && g.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function R() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    t = (0, Chunk442837.e7)([Chunk889369.Z], () => Chunk889369.Z.submitting),
    n = (0, Chunk442837.e7)([Chunk208665.Z], () => Chunk208665.Z.advancedMode);
  return null == module ? null : (0, Chunk951288.jsx)(Chunk852860.Z, {
    onSave: () => {
      (0, Chunk743475.DO)(module).then(() => {
        require && (0, Chunk570961.rS)(module, {
          ignoreDefaultPrompt: true
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: Chunk743475.BG,
    submitting: exports,
    onSaveText: Chunk388032.intl.string(Chunk388032.t["R3BPH+"])
  })
}