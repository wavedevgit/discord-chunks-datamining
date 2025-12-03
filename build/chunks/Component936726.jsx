/** Chunk was on 86736 **/
/** chunk id: 936726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk139387 = require("./139387.js"),
  Chunk308063 = require("./308063.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk208567 = require("./208567.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk572004 = require("./572004.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632256 = require("./632256.js");

function S(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, x.ov)({
    id: e.id,
    avatar: t,
    discriminator: _.fo$
  })
}

function I(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: x,
    isExpanded: I,
    isNew: E,
    errors: w,
    onToggleExpand: P
  } = e, [T, Z] = r.useState(false), [k] = r.useState(new s.V7);
  r.useEffect(() => () => k.stop(), [k]);
  let A = r.useMemo(() => S(n, n.avatar), [n]),
    D = r.useCallback(() => {
      let e = "".concat((0, o.K0)(false)).concat(_.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, j.JG)(e)
    }, [n]),
    R = r.useCallback(() => {
      (0, c.Z)({
        title: C.intl.formatToPlainString(C.t.QVFjHh, {
          name: n.name
        }),
        subtitle: C.intl.format(C.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: C.intl.string(C.t["W+K1Fs"]),
        cancelText: C.intl.string(C.t.xNhj0O),
        onConfirm: () => {
          m.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? u.Z.show({
              title: C.intl.string(C.t.N5riYn),
              body: C.intl.string(C.t.eAxcCc)
            }) : u.Z.show({
              title: C.intl.string(C.t.N5riYn),
              body: C.intl.string(C.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    L = [];
  null != n.user ? L.push({
    icon: d.T39,
    text: C.intl.formatToPlainString(C.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new f.Z(e);
        return O.ZP.getUserTag(t)
      })(n.user),
      timestamp: v.default.extractTimestamp(n.id)
    })
  }) : L.push({
    icon: d.T39,
    text: C.intl.formatToPlainString(C.t["7mv59O"], {
      timestamp: v.default.extractTimestamp(n.id)
    })
  });
  let M = null;
  return I && null != l && (M = (0, i.jsxs)("div", {
    className: N.body,
    children: [(0, i.jsx)(d.izJ, {
      className: N.topDivider
    }), (0, i.jsxs)(b.Z, {
      children: [(0, i.jsx)(b.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(b.Z, {
          className: N.avatarWrapper,
          direction: b.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(g.Z, {
            image: l.avatar,
            onChange: e => {
              p.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => S(n, e),
            imageClassName: N.avatarUploaderInner,
            showIcon: true
          }), null != w.avatar && "" !== w.avatar ? (0, i.jsx)(d.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: w.avatar
          }) : null]
        })
      }), (0, i.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(b.Z, {
          children: [(0, i.jsx)(b.Z.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(d.oil, {
              label: C.intl.string(C.t.ukdxuo),
              value: l.name,
              onChange: e => {
                p.Z.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: w.name
            })
          }), (0, i.jsx)(b.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(d.VcW, {
                label: C.intl.string(C.t.GK18KJ),
                value: l.channel_id,
                options: x,
                onChange: e => {
                  p.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: C.intl.string(C.t.r2ptsz)
              })
            })
          })]
        }), (0, i.jsx)(d.izJ, {
          className: N.bottomDivider
        }), (0, i.jsxs)(b.Z, {
          children: [(0, i.jsx)(d.aML, {
            "data-migration-pending": true,
            text: C.intl.string(C.t.wwdb3g),
            forceOpen: T,
            color: d.r6K.GREEN,
            disableTooltipPointerEvents: true,
            children: e => {
              var t, r, {
                  onClick: l,
                  onMouseEnter: a,
                  onMouseLeave: o,
                  onBlur: s,
                  onFocus: c
                } = e,
                u = function(e, t) {
                  if (null == e) return {};
                  var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                      l = Object.keys(e);
                    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                  }
                  return r
                }(e, ["onClick", "onMouseEnter", "onMouseLeave", "onBlur", "onFocus"]);
              return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": true,
                className: N.copyButton,
                children: (0, i.jsx)(d.Button, (t = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                      var i;
                      i = n[t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = i
                    })
                  }
                  return e
                }({
                  variant: "secondary",
                  size: "sm",
                  text: C.intl.string(C.t.Ae9rUW)
                }, u), r = r = {
                  "aria-label": "",
                  onClick: () => {
                    null == l || l(), Z(true), d.uvj.announce(C.intl.string(C.t.wwdb3g)), k.start(1e3, () => Z(false)), D()
                  },
                  disabled: null == n.token || "" === n.token
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                  }
                  return n
                })(Object(r)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
              })
            }
          }), (0, i.jsx)(d.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: C.intl.string(C.t.jVrUnC),
            onClick: R
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(d.Zbd, {
    editable: true,
    id: t,
    className: a()(N.card, E ? N.pulse : null),
    children: (0, i.jsxs)(b.Z, {
      direction: b.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(d.P3F, {
        className: N.header,
        "aria-expanded": I,
        onClick: P,
        children: (0, i.jsxs)(b.Z, {
          align: b.Z.Align.CENTER,
          children: [(0, i.jsx)(y.Z, {
            name: n.name,
            imageSrc: A,
            details: L
          }), (0, i.jsx)(h.Z, {
            className: N.expandIcon,
            expanded: I,
            "aria-hidden": true
          })]
        })
      }), M]
    })
  })
}