/** Chunk was on 9414 **/
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
  Chunk191607 = require("./191607.js");

function w(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, j.ov)({
    id: e.id,
    avatar: t,
    discriminator: N.fo$
  })
}

function E(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: j,
    isExpanded: E,
    isNew: P,
    errors: T,
    onToggleExpand: Z
  } = e, [_, k] = r.useState(false), [A] = r.useState(new s.V7);
  r.useEffect(() => () => A.stop(), [A]);
  let D = r.useMemo(() => w(n, n.avatar), [n]),
    R = r.useCallback(() => {
      let e = "".concat((0, o.K0)(false)).concat(N.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, v.JG)(e)
    }, [n]),
    L = r.useCallback(() => {
      (0, d.Z)({
        title: S.intl.formatToPlainString(S.t.QVFjHh, {
          name: n.name
        }),
        subtitle: S.intl.format(S.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: S.intl.string(S.t["W+K1Fs"]),
        cancelText: S.intl.string(S.t.xNhj0O),
        onConfirm: () => {
          m.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? b.Z.show({
              title: S.intl.string(S.t.N5riYn),
              body: S.intl.string(S.t.eAxcCc)
            }) : b.Z.show({
              title: S.intl.string(S.t.N5riYn),
              body: S.intl.string(S.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    M = [];
  null != n.user ? M.push({
    icon: u.T39,
    text: S.intl.formatToPlainString(S.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new h.Z(e);
        return y.ZP.getUserTag(t)
      })(n.user),
      timestamp: O.default.extractTimestamp(n.id)
    })
  }) : M.push({
    icon: u.T39,
    text: S.intl.formatToPlainString(S.t["7mv59O"], {
      timestamp: O.default.extractTimestamp(n.id)
    })
  });
  let U = null;
  return E && null != l && (U = (0, i.jsxs)("div", {
    className: I.body,
    children: [(0, i.jsx)(u.izJ, {
      className: I.topDivider
    }), (0, i.jsxs)(f.Z, {
      children: [(0, i.jsx)(f.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(f.Z, {
          className: I.avatarWrapper,
          direction: f.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(g.Z, {
            image: l.avatar,
            onChange: e => {
              p.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => w(n, e),
            imageClassName: I.avatarUploaderInner,
            showIcon: true
          }), null != T.avatar && "" !== T.avatar ? (0, i.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: T.avatar
          }) : null]
        })
      }), (0, i.jsxs)(f.Z, {
        direction: f.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(f.Z, {
          children: [(0, i.jsx)(f.Z.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(u.oil, {
              label: S.intl.string(S.t.ukdxuo),
              value: l.name,
              onChange: e => {
                p.Z.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: T.name
            })
          }), (0, i.jsx)(f.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(c.d, {
                label: S.intl.string(S.t.GK18KJ),
                value: l.channel_id,
                options: j,
                onChange: e => {
                  p.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: S.intl.string(S.t.r2ptsz)
              })
            })
          })]
        }), (0, i.jsx)(u.izJ, {
          className: I.bottomDivider
        }), (0, i.jsxs)(f.Z, {
          children: [(0, i.jsx)(u.aML, {
            "data-migration-pending": true,
            text: S.intl.string(S.t.wwdb3g),
            forceOpen: _,
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
                className: I.copyButton,
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
                  text: S.intl.string(S.t.Ae9rUW)
                }, d), r = r = {
                  "aria-label": "",
                  onClick: () => {
                    null == l || l(), k(true), u.uvj.announce(S.intl.string(S.t.wwdb3g)), A.start(1e3, () => k(false)), R()
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
            text: S.intl.string(S.t.jVrUnC),
            onClick: L
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(u.Zbd, {
    editable: true,
    id: t,
    className: a()(I.card, P ? I.pulse : null),
    children: (0, i.jsxs)(f.Z, {
      direction: f.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(u.P3F, {
        className: I.header,
        "aria-expanded": E,
        onClick: Z,
        children: (0, i.jsxs)(f.Z, {
          align: f.Z.Align.CENTER,
          children: [(0, i.jsx)(C.Z, {
            name: n.name,
            imageSrc: D,
            details: M
          }), (0, i.jsx)(x.Z, {
            className: I.expandIcon,
            expanded: E,
            "aria-hidden": true
          })]
        })
      }), U]
    })
  })
}