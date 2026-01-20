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

function T(e, t) {
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
    isNew: Z,
    errors: w,
    onToggleExpand: P
  } = e, [_, k] = r.useState(false), [A] = r.useState(new s.V7);
  r.useEffect(() => () => A.stop(), [A]);
  let D = r.useMemo(() => T(n, n.avatar), [n]),
    R = r.useCallback(() => {
      let e = "".concat((0, o.K0)(false)).concat(N.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, v.JG)(e)
    }, [n]),
    L = r.useCallback(() => {
      (0, c.Z)({
        title: S.intl.formatToPlainString(S.t.QVFjHh, {
          name: n.name
        }),
        subtitle: S.intl.format(S.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: S.intl.string(S.t["W+K1Fs"]),
        cancelText: S.intl.string(S.t.xNhj0O),
        onConfirm: () => {
          p.Z.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? m.Z.show({
              title: S.intl.string(S.t.N5riYn),
              body: S.intl.string(S.t.eAxcCc)
            }) : m.Z.show({
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
    }), (0, i.jsxs)(g.Z, {
      children: [(0, i.jsx)(g.Z.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(g.Z, {
          className: I.avatarWrapper,
          direction: g.Z.Direction.VERTICAL,
          children: [(0, i.jsx)(f.Z, {
            image: l.avatar,
            onChange: e => {
              b.Z.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => T(n, e),
            imageClassName: I.avatarUploaderInner,
            showIcon: true
          }), null != w.avatar && "" !== w.avatar ? (0, i.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: w.avatar
          }) : null]
        })
      }), (0, i.jsxs)(g.Z, {
        direction: g.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(g.Z, {
          children: [(0, i.jsx)(g.Z.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(u.oil, {
              label: S.intl.string(S.t.ukdxuo),
              value: l.name,
              onChange: e => {
                b.Z.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: w.name
            })
          }), (0, i.jsx)(g.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(u.VcW, {
                label: S.intl.string(S.t.GK18KJ),
                value: l.channel_id,
                options: j,
                formatOption: e => {
                  let {
                    value: t,
                    label: n
                  } = e;
                  return {
                    id: t.toString(),
                    value: t,
                    label: n
                  }
                },
                onSelectionChange: e => {
                  b.Z.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: S.intl.string(S.t.r2ptsz),
                selectionMode: "single"
              })
            })
          })]
        }), (0, i.jsx)(u.izJ, {
          className: I.bottomDivider
        }), (0, i.jsxs)(g.Z, {
          children: [(0, i.jsx)(d.u, {
            text: S.intl.string(S.t.wwdb3g),
            shouldShow: _,
            children: (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: I.copyButton,
              children: (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: S.intl.string(S.t.Ae9rUW),
                "aria-label": "",
                onClick: () => {
                  k(true), u.uvj.announce(S.intl.string(S.t.wwdb3g)), A.start(1e3, () => k(false)), R()
                },
                disabled: null == n.token || "" === n.token
              })
            })
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
    className: a()(I.card, Z ? I.pulse : null),
    children: (0, i.jsxs)(g.Z, {
      direction: g.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(u.P3F, {
        className: I.header,
        "aria-expanded": E,
        onClick: P,
        children: (0, i.jsxs)(g.Z, {
          align: g.Z.Align.CENTER,
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