/** Chunk was on 86736 **/
/** chunk id: 936726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk668339 = require("./668339.jsx"),
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

function I(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, j.ov)({
    id: e.id,
    avatar: t,
    discriminator: C.fo$
  })
}

function E(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: j,
    isExpanded: E,
    isNew: w,
    errors: P,
    onToggleExpand: T
  } = e, [Z, k] = r.useState(false), [A] = r.useState(new s.V7);
  r.useEffect(() => () => A.stop(), [A]);
  let D = r.useMemo(() => I(n, n.avatar), [n]),
    R = r.useCallback(() => {
      let e = "".concat((0, o.K0)(false)).concat(C.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, v.JG)(e)
    }, [n]),
    L = r.useCallback(() => {
      (0, d.Z)({
        title: N.intl.formatToPlainString(N.t.QVFjHh, {
          name: n.name
        }),
        subtitle: N.intl.format(N.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: N.intl.string(N.t["W+K1Fs"]),
        cancelText: N.intl.string(N.t.xNhj0O),
        onConfirm: () => {
          b.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? p.Z.show({
              title: N.intl.string(N.t.N5riYn),
              body: N.intl.string(N.t.eAxcCc)
            }) : p.Z.show({
              title: N.intl.string(N.t.N5riYn),
              body: N.intl.string(N.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    M = [];
  null != n.user ? M.push({
    icon: u.T39,
    text: N.intl.formatToPlainString(N.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new h.Z(e);
        return y.ZP.getUserTag(t)
      })(n.user),
      timestamp: O.default.extractTimestamp(n.id)
    })
  }) : M.push({
    icon: u.T39,
    text: N.intl.formatToPlainString(N.t["7mv59O"], {
      timestamp: O.default.extractTimestamp(n.id)
    })
  });
  let U = null;
  return E && null != l && (U = (0, i.jsxs)("div", {
    className: S.body,
    children: [(0, i.jsx)(u.izJ, {
      className: S.topDivider
    }), (0, i.jsxs)(g.Z, {
      children: [(0, i.jsx)(g.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(g.Z, {
          className: S.avatarWrapper,
          direction: g.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(f.Z, {
            image: l.avatar,
            onChange: e => {
              m.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => I(n, e),
            imageClassName: S.avatarUploaderInner,
            showIcon: true
          }), null != P.avatar && "" !== P.avatar ? (0, i.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: P.avatar
          }) : null]
        })
      }), (0, i.jsxs)(g.Z, {
        direction: g.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(g.Z, {
          children: [(0, i.jsx)(g.Z.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(u.oil, {
              label: N.intl.string(N.t.ukdxuo),
              value: l.name,
              onChange: e => {
                m.Z.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: P.name
            })
          }), (0, i.jsx)(g.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(c.d, {
                label: N.intl.string(N.t.GK18KJ),
                value: l.channel_id,
                options: j,
                onChange: e => {
                  m.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: N.intl.string(N.t.r2ptsz)
              })
            })
          })]
        }), (0, i.jsx)(u.izJ, {
          className: S.bottomDivider
        }), (0, i.jsxs)(g.Z, {
          children: [(0, i.jsx)(u.aML, {
            "data-migration-pending": true,
            text: N.intl.string(N.t.wwdb3g),
            forceOpen: Z,
            color: u.r6K.GREEN,
            disableTooltipPointerEvents: true,
            children: e => {
              var t, r, {
                  onClick: l,
                  onMouseEnter: a,
                  onMouseLeave: o,
                  onBlur: s,
                  onFocus: c
                } = e,
                d = function(e, t) {
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
                className: S.copyButton,
                children: (0, i.jsx)(u.Button, (t = function(e) {
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
                  text: N.intl.string(N.t.Ae9rUW)
                }, d), r = r = {
                  "aria-label": "",
                  onClick: () => {
                    null == l || l(), k(true), u.uvj.announce(N.intl.string(N.t.wwdb3g)), A.start(1e3, () => k(false)), R()
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
          }), (0, i.jsx)(u.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: N.intl.string(N.t.jVrUnC),
            onClick: L
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(u.Zbd, {
    editable: true,
    id: t,
    className: a()(S.card, w ? S.pulse : null),
    children: (0, i.jsxs)(g.Z, {
      direction: g.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(u.P3F, {
        className: S.header,
        "aria-expanded": E,
        onClick: T,
        children: (0, i.jsxs)(g.Z, {
          align: g.Z.Align.CENTER,
          children: [(0, i.jsx)(_.Z, {
            name: n.name,
            imageSrc: D,
            details: M
          }), (0, i.jsx)(x.Z, {
            className: S.expandIcon,
            expanded: E,
            "aria-hidden": true
          })]
        })
      }), U]
    })
  })
}