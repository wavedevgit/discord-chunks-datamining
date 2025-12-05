/** Chunk was on web.js **/
/** chunk id: 903904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => b
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk813820 = require("./813820.js"),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk591085 = require("./591085.js"),
  Chunk546090 = require("./546090.jsx"),
  Chunk366733 = require("./366733.jsx"),
  Chunk516475 = require("./516475.jsx"),
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
    children: [(0, Chunk54381.jsx)(Chunk516475.Z, {
      width: 85,
      height: 16,
      className: Chunk17845.premiumGroupIcon
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
      onClick: o
    } = e;
    return (0, r.jsxs)("div", {
      className: _.descriptionAndButtonContainer,
      children: [(0, r.jsxs)(a.Kqy, {
        direction: "vertical",
        gap: 8,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: n
        })]
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        text: i,
        onClick: o
      })]
    })
  },
  g = e => {
    let {
      currentUser: t,
      premiumGroupPrimaryUser: n,
      premiumGroupMembers: i,
      onLeavePlan: s
    } = e;
    return (0, r.jsxs)(a.$1m, {
      className: _.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(m, {}), (0, r.jsxs)("div", {
        className: _.contentGrid,
        children: [(0, r.jsx)(h, {
          title: p.intl.string(f.default["fWbI1+"]),
          description: p.intl.format(f.default.tjpGQG, {
            primaryUserName: (0, o.XM)(n)
          }),
          buttonText: p.intl.string(f.default.XF1dDX),
          onClick: s
        }), (0, r.jsxs)(a.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: _.usersListHeader,
            children: p.intl.string(f.default["oqw/KW"])
          }), (0, r.jsx)(c.Vl, {
            user: n,
            isOwnUser: false
          }), i.map(e => (0, r.jsx)(c.kg, {
            user: e,
            isOwnUser: e.id === (null == t ? true : t.id)
          }, e.id))]
        })]
      })]
    })
  },
  E = e => {
    let {
      premiumGroupPrimaryUser: t,
      premiumGroupMembers: n,
      premiumGroupInvitedUsers: i,
      onCancelSubscription: o,
      onRemoveMember: s,
      onInvite: u,
      onRemoveInvitedUser: g
    } = e, E = d.v$, b = n.length, y = Math.max(0, E - b - i.length);
    return (0, r.jsxs)(a.$1m, {
      className: _.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(m, {}), (0, r.jsxs)("div", {
        className: _.contentGrid,
        children: [(0, r.jsx)(h, {
          title: p.intl.string(f.default["fWbI1+"]),
          description: p.intl.format(f.default.LANYBF, {
            totalSeats: E
          }),
          buttonText: p.intl.string(f.default["3QwQKb"]),
          onClick: o
        }), (0, r.jsxs)(a.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          children: [(0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 4,
            padding: {
              top: 12,
              left: 4,
              right: 4
            },
            children: [(0, r.jsxs)(a.Kqy, {
              direction: "horizontal",
              justify: "space-between",
              align: "center",
              gap: 4,
              children: [(0, r.jsx)(a.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: p.intl.string(f.default["oqw/KW"])
              }), (0, r.jsx)(l.Z, {
                onInvite: u
              })]
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: p.intl.format(f.default["/a/UoP"], {
                usedSeats: b,
                totalSeats: E
              })
            })]
          }), (0, r.jsx)(c.Vl, {
            user: t,
            isOwnUser: true
          }), n.map(e => (0, r.jsx)(c.UA, {
            user: e,
            onRemove: () => s(e)
          }, e.id)), i.map(e => (0, r.jsx)(c.gk, {
            user: e,
            onRemove: () => g(e)
          }, e.id)), Array.from({
            length: y
          }).map((e, t) => (0, r.jsx)(c.QU, {
            onInvite: u
          }, "seat-available-".concat(t)))]
        })]
      })]
    })
  },
  b = e => {
    let {
      currentUser: t
    } = e, {
      premiumGroupMembers: n,
      isLoading: o
    } = (0, s.Z)();
    if (o) return (0, r.jsx)(a.$jN, {});
    if (null == n) return null;
    let {
      primary: l,
      members: c,
      invitedUsers: u
    } = n;
    return t.premiumGroupRole === i.bF.PRIMARY ? (0, r.jsx)(E, {
      currentUser: t,
      premiumGroupPrimaryUser: l,
      premiumGroupMembers: c,
      premiumGroupInvitedUsers: u,
      onCancelSubscription: () => {},
      onRemoveMember: () => {},
      onInvite: () => {},
      onRemoveInvitedUser: () => {}
    }) : (0, r.jsx)(g, {
      currentUser: t,
      premiumGroupPrimaryUser: l,
      premiumGroupMembers: c,
      onLeavePlan: () => {}
    })
  }