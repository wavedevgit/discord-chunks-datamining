/** Chunk was on 9414 **/
/** chunk id: 936726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk846519 = require("./846519.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk681715 = require("./681715.js"),
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

function E(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, v.ov)({
    id: e.id,
    avatar: t,
    discriminator: S.fo$
  })
}

function Z(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: v,
    isExpanded: Z,
    isNew: w,
    errors: P,
    onToggleExpand: _
  } = e, [k, A] = r.useState(false), [D] = r.useState(new s.V7);
  r.useEffect(() => () => D.stop(), [D]);
  let R = r.useMemo(() => E(n, n.avatar), [n]),
    L = r.useCallback(() => {
      let e = "".concat((0, o.K0)(false)).concat(S.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, O.JG)(e)
    }, [n]),
    M = r.useCallback(() => {
      (0, d.Z)({
        title: I.intl.formatToPlainString(I.t.QVFjHh, {
          name: n.name
        }),
        subtitle: I.intl.format(I.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: I.intl.string(I.t["W+K1Fs"]),
        cancelText: I.intl.string(I.t.xNhj0O),
        onConfirm: () => {
          g.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? b.Z.show({
              title: I.intl.string(I.t.N5riYn),
              body: I.intl.string(I.t.eAxcCc)
            }) : b.Z.show({
              title: I.intl.string(I.t.N5riYn),
              body: I.intl.string(I.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    U = [];
  null != n.user ? U.push({
    icon: m.T39,
    text: I.intl.formatToPlainString(I.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new x.Z(e);
        return C.ZP.getUserTag(t)
      })(n.user),
      timestamp: y.default.extractTimestamp(n.id)
    })
  }) : U.push({
    icon: m.T39,
    text: I.intl.formatToPlainString(I.t["7mv59O"], {
      timestamp: y.default.extractTimestamp(n.id)
    })
  });
  let B = null;
  return Z && null != l && (B = (0, i.jsxs)("div", {
    className: T.body,
    children: [(0, i.jsx)(m.izJ, {
      className: T.topDivider
    }), (0, i.jsxs)(f.Z, {
      children: [(0, i.jsx)(f.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(f.Z, {
          className: T.avatarWrapper,
          direction: f.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(h.Z, {
            image: l.avatar,
            onChange: e => {
              p.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => E(n, e),
            imageClassName: T.avatarUploaderInner,
            showIcon: true
          }), null != P.avatar && "" !== P.avatar ? (0, i.jsx)(m.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: P.avatar
          }) : null]
        })
      }), (0, i.jsxs)(f.Z, {
        direction: f.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(f.Z, {
          children: [(0, i.jsx)(f.Z.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(m.oil, {
              label: I.intl.string(I.t.ukdxuo),
              value: l.name,
              onChange: e => {
                p.Z.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: P.name
            })
          }), (0, i.jsx)(f.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(c.d, {
                label: I.intl.string(I.t.GK18KJ),
                value: l.channel_id,
                options: v,
                onChange: e => {
                  p.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: I.intl.string(I.t.r2ptsz)
              })
            })
          })]
        }), (0, i.jsx)(m.izJ, {
          className: T.bottomDivider
        }), (0, i.jsxs)(f.Z, {
          children: [(0, i.jsx)(u.u, {
            text: I.intl.string(I.t.wwdb3g),
            shouldShow: k,
            children: (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: T.copyButton,
              children: (0, i.jsx)(m.Button, {
                variant: "secondary",
                size: "sm",
                text: I.intl.string(I.t.Ae9rUW),
                "aria-label": "",
                onClick: () => {
                  A(true), m.uvj.announce(I.intl.string(I.t.wwdb3g)), D.start(1e3, () => A(false)), L()
                },
                disabled: null == n.token || "" === n.token
              })
            })
          }), (0, i.jsx)(m.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: I.intl.string(I.t.jVrUnC),
            onClick: M
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(m.Zbd, {
    editable: true,
    id: t,
    className: a()(T.card, w ? T.pulse : null),
    children: (0, i.jsxs)(f.Z, {
      direction: f.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(m.P3F, {
        className: T.header,
        "aria-expanded": Z,
        onClick: _,
        children: (0, i.jsxs)(f.Z, {
          align: f.Z.Align.CENTER,
          children: [(0, i.jsx)(N.Z, {
            name: n.name,
            imageSrc: R,
            details: U
          }), (0, i.jsx)(j.Z, {
            className: T.expandIcon,
            expanded: Z,
            "aria-hidden": true
          })]
        })
      }), B]
    })
  })
}