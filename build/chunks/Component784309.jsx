/** Chunk was on 21968 **/
/** chunk id: 784309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./747238.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk562465 = require("./562465.js"),
  Chunk451988 = require("./451988.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk282956 = require("./282956.js"),
  Chunk824953 = require("./824953.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk342298 = require("./342298.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk957565 = require("./957565.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk447066 = require("./447066.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416337 = require("./416337.js");

function E(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, j.ku)({
    id: e.id,
    avatar: t,
    discriminator: _.h3J
  })
}

function T(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: j,
    isExpanded: T,
    isNew: C,
    errors: S,
    onToggleExpand: I
  } = e, [P, k] = r.useState(false), [R] = r.useState(new o.Ep);
  r.useEffect(() => () => R.stop(), [R]);
  let L = r.useMemo(() => E(n, n.avatar), [n]),
    D = r.useCallback(() => {
      let e = "".concat((0, s.TP)(false)).concat(_.Rsh.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, O.C)(e)
    }, [n]),
    M = r.useCallback(() => {
      (0, c.A)({
        title: N.intl.formatToPlainString(N.t.QVFjHh, {
          name: n.name
        }),
        subtitle: N.intl.format(N.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: N.intl.string(N.t["W+K1Fs"]),
        cancelText: N.intl.string(N.t.xNhj0O),
        onConfirm: () => {
          g.A.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? p.A.show({
              title: N.intl.string(N.t.N5riYn),
              body: N.intl.string(N.t.eAxcCc)
            }) : p.A.show({
              title: N.intl.string(N.t.N5riYn),
              body: N.intl.string(N.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    G = [];
  null != n.user ? G.push({
    icon: u.O4,
    text: N.intl.formatToPlainString(N.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new h.A(e);
        return A.Ay.getUserTag(t)
      })(n.user),
      timestamp: y.default.extractTimestamp(n.id)
    })
  }) : G.push({
    icon: u.O4,
    text: N.intl.formatToPlainString(N.t["7mv59O"], {
      timestamp: y.default.extractTimestamp(n.id)
    })
  });
  let U = null;
  return T && null != l && (U = (0, i.jsxs)("div", {
    className: w.rf,
    children: [(0, i.jsx)(u.cGx, {
      className: w.fV
    }), (0, i.jsxs)(b.A, {
      children: [(0, i.jsx)(b.A.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(b.A, {
          className: w.R3,
          direction: b.A.Direction.VERTICAL,
          children: [(0, i.jsx)(f.A, {
            image: l.avatar,
            onChange: e => {
              m.A.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => E(n, e),
            imageClassName: w.mr,
            showIcon: true
          }), null != S.avatar && "" !== S.avatar ? (0, i.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: S.avatar
          }) : null]
        })
      }), (0, i.jsxs)(b.A, {
        direction: b.A.Direction.VERTICAL,
        children: [(0, i.jsxs)(b.A, {
          children: [(0, i.jsx)(b.A.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(u.ksK, {
              label: N.intl.string(N.t.ukdxuo),
              value: l.name,
              onChange: e => {
                m.A.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: S.name
            })
          }), (0, i.jsx)(b.A.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(u.ZiE, {
                label: N.intl.string(N.t.GK18KJ),
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
                  m.A.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: N.intl.string(N.t.r2ptsz),
                selectionMode: "single"
              })
            })
          })]
        }), (0, i.jsx)(u.cGx, {
          className: w.Bd
        }), (0, i.jsxs)(b.A, {
          children: [(0, i.jsx)(d.m_, {
            text: N.intl.string(N.t.wwdb3g),
            shouldShow: P,
            children: (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: w.cL,
              children: (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: N.intl.string(N.t.Ae9rUW),
                "aria-label": "",
                onClick: () => {
                  k(true), u.ORC.announce(N.intl.string(N.t.wwdb3g)), R.start(1e3, () => k(false)), D()
                },
                disabled: null == n.token || "" === n.token
              })
            })
          }), (0, i.jsx)(u.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: N.intl.string(N.t.jVrUnC),
            onClick: M
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(u.ZpM, {
    editable: true,
    id: t,
    className: a()(w.Nr, C ? w.U6 : null),
    children: (0, i.jsxs)(b.A, {
      direction: b.A.Direction.VERTICAL,
      children: [(0, i.jsx)(u.DUT, {
        className: w.wx,
        "aria-expanded": T,
        onClick: I,
        children: (0, i.jsxs)(b.A, {
          align: b.A.Align.CENTER,
          children: [(0, i.jsx)(v.A, {
            name: n.name,
            imageSrc: L,
            details: G
          }), (0, i.jsx)(x.A, {
            className: w.eO,
            expanded: T,
            "aria-hidden": true
          })]
        })
      }), U]
    })
  })
}