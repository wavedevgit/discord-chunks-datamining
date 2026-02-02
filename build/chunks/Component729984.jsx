/** Chunk was on 39048 **/
/** chunk id: 729984, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w,
  G: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk112389 = require("./112389.js"),
  Chunk591552 = require("./591552.js"),
  Chunk166444 = require("./166444.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk12773 = require("./12773.js"),
  Chunk777705 = require("./777705.js"),
  Chunk769765 = require("./769765.js"),
  Chunk808728 = require("./808728.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk418448 = require("./418448.js"),
  Chunk863694 = require("./863694.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk82566 = require("./82566.js"),
  Chunk259866 = require("./259866.jsx"),
  Chunk950358 = require("./950358.jsx"),
  Chunk561108 = require("./561108.jsx"),
  Chunk191117 = require("./191117.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk894958 = require("./894958.js"),
  Chunk206314 = require("./206314.js");

function P(e) {
  let {
    guild: t
  } = e, s = (0, l.bG)([d.A], () => d.A.getEnabled(t.id)), f = (0, l.bG)([p.A], () => p.A.hasFetched(t.id)), h = (0, y.A)(t), b = (0, l.bG)([_.A], () => _.A.editedDefaultChannelIds), x = h.filter(e => !b.has(e.id)), [O, v] = i.useState(false);
  return (i.useEffect(() => {
    f || s || (0, m.A)(t.id)
  }, [t.id, f, s]), O || 0 === x.length) ? null : (0, r.jsxs)("div", {
    className: C.Jl,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      children: I.intl.string(I.t.NN7rD3)
    }), (0, r.jsxs)("div", {
      className: C.j7,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: I.intl.string(I.t["3Uuql+"])
      }), (0, r.jsxs)(o.DUT, {
        className: C.AC,
        onClick: () => v(true),
        children: [(0, r.jsx)(o.A9s, {
          size: "xxs",
          color: "currentColor",
          className: C.AI
        }), (0, r.jsx)(o.Text, {
          className: C.fx,
          variant: "text-xs/medium",
          color: "text-brand",
          children: I.intl.string(I.t.ZC3PJ2)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: C.IF,
      children: x.map((e, i) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: C.WG,
          children: [(0, r.jsxs)("div", {
            className: C.yW,
            children: [(0, r.jsxs)("div", {
              className: C.HA,
              children: [(0, r.jsx)(u.gm, {
                channel: e,
                guild: t
              }), (0, r.jsx)(a.A, {
                className: C.__invalid_name,
                children: (0, r.jsx)(o.Text, {
                  className: C.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-default",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, r.jsx)(a.A, {
              className: T.PT,
              children: (0, r.jsx)(o.Text, {
                className: C.At,
                variant: "text-xs/normal",
                children: g.A.parseTopic(e.topic, true, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, c.S)(t.id, e.id) ? (0, r.jsx)(o.Button, {
            size: "sm",
            variant: "primary",
            text: I.intl.string(I.t.OYkgVk),
            onClick: () => (0, j.bN)(e.id)
          }) : (0, r.jsx)(o.Button, {
            size: "sm",
            variant: "secondary",
            text: I.intl.string(I.t.zA9d1J),
            icon: o.XAi,
            iconPosition: "start",
            onClick: () => {
              var i;
              return i = e.id, void(0, o.mMO)(async () => {
                let {
                  default: e
                } = await n.e("54857").then(n.bind(n, 147696));
                return n => {
                  var l, s;
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
                  }({}, n), s = s = {
                    guildId: t.id,
                    startingChannelId: i
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(s)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
                  }), l))
                }
              })
            }
          })]
        }), i < x.length - 1 ? (0, r.jsx)("div", {
          className: C.me
        }) : null]
      }))
    }), (0, r.jsx)("div", {
      className: C.FZ
    })]
  })
}

function w(e) {
  let {
    saveOnClose: t = false
  } = e, n = (0, l.bG)([x.A], () => x.A.getGuild()), s = (0, l.bG)([d.A], () => d.A.isLoading()), a = (0, l.bG)([h.Ay], () => h.Ay.getChannels(null == n ? true : n.id)), c = (0, l.bG)([f.A], () => f.A.getCategories(null == n ? true : n.id)), u = (0, l.bG)([v.A], () => v.A.advancedMode), g = i.useRef(null), [m, p] = i.useState(false), _ = i.useRef(n);
  return (i.useEffect(() => {
    _.current = n
  }), i.useEffect(() => {
    if (t) {
      let {
        current: e
      } = _;
      return () => {
        null != e && (0, j.jr)(e).then(() => {
          u && (0, O.dm)(e, {
            ignoreDefaultPrompt: true
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }, [t, u]), null == n) ? null : s ? (0, r.jsx)(o.y$y, {}) : (0, r.jsxs)("div", {
    className: C.YB,
    children: [(0, r.jsxs)("div", {
      className: C.U5,
      children: [(0, r.jsx)(o.DUT, {
        className: C.cS,
        onClick: () => p(e => !e),
        children: (0, r.jsx)(b.A, {
          direction: m ? b.A.Directions.DOWN : b.A.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(o.Heading, {
        className: C.wx,
        variant: "heading-lg/extrabold",
        children: I.intl.string(I.t["4GSygh"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: I.intl.string(I.t.Kq7FAS)
      }), (0, r.jsx)(A.mU, {
        className: C.kr,
        guildId: n.id
      }), m ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(P, {
          guild: n
        }), (0, r.jsx)(E.A, {
          className: C.bE,
          guild: n,
          categories: c,
          channels: a,
          hasSidebar: false
        })]
      }), u && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: C.FZ
        }), (0, r.jsx)(o.Heading, {
          className: C.RH,
          variant: "heading-lg/extrabold",
          children: I.intl.string(I.t.g2RnpV)
        }), (0, r.jsx)(o.Text, {
          className: C.nd,
          variant: "text-sm/normal",
          color: "text-default",
          children: I.intl.string(I.t.bLDQ1Q)
        }), (0, r.jsx)("div", {
          ref: g,
          className: C.di,
          children: (0, r.jsx)(S.A, {
            guildId: n.id,
            prejoinOnly: true,
            includeCount: true,
            singleColumn: true
          })
        })]
      })]
    }), (0, r.jsx)(N.A, {
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
  let e = (0, l.bG)([x.A], () => x.A.getProps().guild),
    t = (0, l.bG)([_.A], () => _.A.submitting),
    n = (0, l.bG)([v.A], () => v.A.advancedMode);
  return null == e ? null : (0, r.jsx)(s.A, {
    onSave: () => {
      (0, j.jr)(e).then(() => {
        n && (0, O.dm)(e, {
          ignoreDefaultPrompt: true
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: j.nx,
    submitting: t,
    onSaveText: I.intl.string(I.t["R3BPH+"])
  })
}