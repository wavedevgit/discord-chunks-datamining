/** Chunk was on web.js **/
/** chunk id: 146761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => E,
  d: () => g
}), require("./953529.js"), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk591085 = require("./591085.js"),
  Chunk546090 = require("./546090.jsx"),
  Chunk366733 = require("./366733.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk441677 = require("./441677.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk17845 = require("./17845.js");
let m = () => (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    direction: "horizontal",
    gap: 10,
    padding: {
      top: 12,
      bottom: 12
    },
    className: Chunk17845.header,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "display-md",
      className: Chunk17845.logoHeader,
      children: (0, Chunk282793.sO)()
    }), (0, Chunk54381.jsx)(Chunk481060.Cts, {
      type: "beta",
      variant: "expressive"
    })]
  }),
  h = e => {
    let {
      title: t,
      description: n,
      buttonText: i,
      onClick: a
    } = e;
    return (0, r.jsxs)("div", {
      className: _.descriptionAndButtonContainer,
      children: [(0, r.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 8,
        className: _.descriptionContainer,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      }), (0, r.jsx)("div", {
        className: _.buttonContainer,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          text: i,
          onClick: a
        })
      })]
    })
  },
  g = e => {
    let {
      currentUser: t
    } = e, {
      premiumGroupMembers: n,
      isLoading: i
    } = (0, l.Z)();
    if (i || null == n) return (0, r.jsx)(o.$jN, {});
    let {
      primary: a,
      members: c
    } = n, g = () => {
      throw Error("Not implemented")
    };
    return (0, r.jsxs)(o.$1m, {
      className: _.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(m, {}), (0, r.jsxs)("div", {
        className: _.contentGrid,
        children: [(0, r.jsx)(h, {
          title: p.intl.formatToPlainString(f.default.xiUjMF, {
            premiumGroupProductName: (0, d.sO)()
          }),
          description: p.intl.format(f.default["2HEyqG"], {
            primaryName: (0, s.XM)(a),
            helpCenterLink: d.j3,
            premiumGroupProductName: (0, d.sO)()
          }),
          buttonText: p.intl.string(f.default.NCu2JD),
          onClick: g
        }), (0, r.jsxs)(o.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: _.usersListHeader,
            children: p.intl.string(f.default["oqw/KW"])
          }), (0, r.jsx)(u.Vl, {
            user: a,
            isOwnUser: false
          }), c.map(e => (0, r.jsx)(u.kg, {
            user: e,
            isOwnUser: e.id === (null == t ? true : t.id)
          }, e.id))]
        })]
      })]
    })
  },
  E = e => {
    let {
      subscription: t
    } = e;
    a()(t.hasAnyPremiumGroup, "Subscription is not a premium group");
    let {
      premiumGroupMembers: n,
      isLoading: i
    } = (0, l.Z)();
    if (i || null == n) return (0, r.jsx)(o.$jN, {});
    let {
      primary: s,
      members: g,
      invitedUsers: E
    } = n, b = () => {
      throw Error("Not implemented")
    }, y = e => {
      throw Error("Not implemented")
    }, O = () => {
      throw Error("Not implemented")
    }, v = e => {
      throw Error("Not implemented")
    }, S = d.v$, I = g.length, T = Math.max(0, S - I - E.length);
    return (0, r.jsxs)(o.$1m, {
      className: _.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(m, {}), (0, r.jsxs)("div", {
        className: _.contentGrid,
        children: [(0, r.jsx)(h, {
          title: p.intl.formatToPlainString(f.default.NRCfnQ, {
            premiumGroupProductName: (0, d.sO)()
          }),
          description: p.intl.format(f.default.lvnrnb, {
            totalSeats: S,
            premiumGroupProductName: (0, d.sO)(),
            helpCenterLink: d.j3
          }),
          buttonText: p.intl.string(f.default.oO0EYw),
          onClick: b
        }), (0, r.jsxs)(o.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsxs)(o.Kqy, {
            direction: "vertical",
            gap: 4,
            padding: {
              top: 12,
              left: 4,
              right: 4,
              bottom: 10
            },
            children: [(0, r.jsxs)(o.Kqy, {
              direction: "horizontal",
              justify: "space-between",
              align: "center",
              gap: 4,
              children: [(0, r.jsx)(o.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: p.intl.string(f.default["oqw/KW"])
              }), (0, r.jsx)(c.Z, {
                onInvite: O
              })]
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: p.intl.format(f.default["/a/UoP"], {
                usedSeats: I,
                totalSeats: S
              })
            })]
          }), (0, r.jsx)(u.Vl, {
            user: s,
            isOwnUser: true
          }), g.map(e => (0, r.jsx)(u.UA, {
            user: e,
            onRemove: () => y(e)
          }, e.id)), E.map(e => (0, r.jsx)(u.gk, {
            user: e,
            onRemove: () => v(e)
          }, e.id)), Array.from({
            length: T
          }).map((e, t) => (0, r.jsx)(u.QU, {
            onInvite: O
          }, "seat-available-".concat(t)))]
        })]
      })]
    })
  }