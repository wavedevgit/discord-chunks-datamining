/** Chunk was on 21968 **/
/** chunk id: 784309, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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

function w(e, t) {
  return null != t && /^data:/.test(t) ? t : (0, j.ku)({
    id: e.id,
    avatar: t,
    discriminator: N.h3J
  })
}

function C(e) {
  let {
    id: t,
    webhook: n,
    editedWebhook: l,
    channelOptions: j,
    isExpanded: C,
    isNew: S,
    errors: _,
    onToggleExpand: I
  } = e, [P, k] = r.useState(false), [R] = r.useState(new o.Ep);
  r.useEffect(() => () => R.stop(), [R]);
  let L = r.useMemo(() => w(n, n.avatar), [n]),
    M = r.useCallback(() => {
      let e = "".concat((0, s.TP)(false)).concat(N.Rsh.WEBHOOK_INTEGRATION(n.id, n.token));
      (0, O.C)(e)
    }, [n]),
    D = r.useCallback(() => {
      (0, c.A)({
        title: E.intl.formatToPlainString(E.t.QVFjHh, {
          name: n.name
        }),
        subtitle: E.intl.format(E.t["rIWe+5"], {
          name: n.name
        }),
        confirmText: E.intl.string(E.t["W+K1Fs"]),
        cancelText: E.intl.string(E.t.xNhj0O),
        onConfirm: () => {
          p.A.delete(n.guild_id, n.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t ? b.A.show({
              title: E.intl.string(E.t.N5riYn),
              body: E.intl.string(E.t.eAxcCc)
            }) : b.A.show({
              title: E.intl.string(E.t.N5riYn),
              body: E.intl.string(E.t["/4TwKf"])
            })
          })
        }
      })
    }, [n.guild_id, n.id, n.name]),
    G = [];
  null != n.user ? G.push({
    icon: u.O4,
    text: E.intl.formatToPlainString(E.t["7EcUbr"], {
      user: (e => {
        if (null == e) return null;
        let t = new h.A(e);
        return A.Ay.getUserTag(t)
      })(n.user),
      timestamp: y.default.extractTimestamp(n.id)
    })
  }) : G.push({
    icon: u.O4,
    text: E.intl.formatToPlainString(E.t["7mv59O"], {
      timestamp: y.default.extractTimestamp(n.id)
    })
  });
  let U = null;
  return C && null != l && (U = (0, i.jsxs)("div", {
    className: T.rf,
    children: [(0, i.jsx)(u.cGx, {
      className: T.fV
    }), (0, i.jsxs)(m.A, {
      children: [(0, i.jsx)(m.A.Child, {
        shrink: 1,
        grow: 0,
        children: (0, i.jsxs)(m.A, {
          className: T.R3,
          direction: m.A.Direction.VERTICAL,
          children: [(0, i.jsx)(g.A, {
            image: l.avatar,
            onChange: e => {
              f.A.updateWebhook({
                avatar: e
              })
            },
            makeURL: e => w(n, e),
            imageClassName: T.mr,
            showIcon: true
          }), null != _.avatar && "" !== _.avatar ? (0, i.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: _.avatar
          }) : null]
        })
      }), (0, i.jsxs)(m.A, {
        direction: m.A.Direction.VERTICAL,
        children: [(0, i.jsxs)(m.A, {
          children: [(0, i.jsx)(m.A.Child, {
            wrap: true,
            basis: "50%",
            children: (0, i.jsx)(u.ksK, {
              label: E.intl.string(E.t.ukdxuo),
              value: l.name,
              onChange: e => {
                f.A.updateWebhook({
                  name: e
                })
              },
              maxLength: 80,
              error: _.name
            })
          }), (0, i.jsx)(m.A.Child, {
            basis: "50%",
            children: (0, i.jsx)("div", {
              children: (0, i.jsx)(u.ZiE, {
                label: E.intl.string(E.t.GK18KJ),
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
                  f.A.updateWebhook({
                    channelId: e
                  })
                },
                placeholder: E.intl.string(E.t.r2ptsz),
                selectionMode: "single"
              })
            })
          })]
        }), (0, i.jsx)(u.cGx, {
          className: T.Bd
        }), (0, i.jsxs)(m.A, {
          children: [(0, i.jsx)(d.m_, {
            text: E.intl.string(E.t.wwdb3g),
            shouldShow: P,
            children: (0, i.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: T.cL,
              children: (0, i.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                text: E.intl.string(E.t.Ae9rUW),
                "aria-label": "",
                onClick: () => {
                  k(true), u.ORC.announce(E.intl.string(E.t.wwdb3g)), R.start(1e3, () => k(false)), M()
                },
                disabled: null == n.token || "" === n.token
              })
            })
          }), (0, i.jsx)(u.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: E.intl.string(E.t.jVrUnC),
            onClick: D
          })]
        })]
      })]
    })]
  })), (0, i.jsx)(u.ZpM, {
    editable: true,
    id: t,
    className: a()(T.Nr, S ? T.U6 : null),
    children: (0, i.jsxs)(m.A, {
      direction: m.A.Direction.VERTICAL,
      children: [(0, i.jsx)(u.DUT, {
        className: T.wx,
        "aria-expanded": C,
        onClick: I,
        children: (0, i.jsxs)(m.A, {
          align: m.A.Align.CENTER,
          children: [(0, i.jsx)(v.A, {
            name: n.name,
            imageSrc: L,
            details: G
          }), (0, i.jsx)(x.A, {
            className: T.eO,
            expanded: C,
            "aria-hidden": true
          })]
        })
      }), U]
    })
  })
}