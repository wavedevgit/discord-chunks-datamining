/** Chunk was on web.js **/
/** chunk id: 146761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => S,
  d: () => v
}), require("./953529.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk591085 = require("./591085.js"),
  Chunk546090 = require("./546090.jsx"),
  Chunk366733 = require("./366733.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk441677 = require("./441677.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk17845 = require("./17845.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = () => (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
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
  O = e => {
    let {
      title: t,
      description: n,
      buttonText: i,
      onClick: a
    } = e;
    return (0, r.jsxs)("div", {
      className: m.descriptionAndButtonContainer,
      children: [(0, r.jsxs)(s.Kqy, {
        direction: "vertical",
        gap: 8,
        className: m.descriptionContainer,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      }), (0, r.jsx)("div", {
        className: m.buttonContainer,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          text: i,
          onClick: a
        })
      })]
    })
  },
  v = e => {
    let {
      currentUser: t
    } = e, {
      premiumGroupMembers: n,
      isLoading: i
    } = (0, c.Z)();
    if (i || null == n) return (0, r.jsx)(s.$jN, {});
    let {
      primary: a,
      members: o
    } = n, u = () => {
      throw Error("Not implemented")
    };
    return (0, r.jsxs)(s.$1m, {
      className: m.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(y, {}), (0, r.jsxs)("div", {
        className: m.contentGrid,
        children: [(0, r.jsx)(O, {
          title: _.intl.formatToPlainString(p.default.xiUjMF, {
            premiumGroupProductName: (0, f.sO)()
          }),
          description: _.intl.format(p.default["2HEyqG"], {
            primaryName: (0, l.XM)(a),
            helpCenterLink: f.j3,
            premiumGroupProductName: (0, f.sO)()
          }),
          buttonText: _.intl.string(p.default.NCu2JD),
          onClick: u
        }), (0, r.jsxs)(s.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            color: "text-strong",
            className: m.usersListHeader,
            children: _.intl.string(p.default["oqw/KW"])
          }), (0, r.jsx)(d.Vl, {
            user: a,
            isOwnUser: false
          }), o.map(e => (0, r.jsx)(d.kg, {
            user: e,
            isOwnUser: e.id === (null == t ? true : t.id)
          }, e.id))]
        })]
      })]
    })
  },
  S = e => {
    let {
      subscription: t,
      analyticsLocations: a
    } = e;
    o()(t.hasAnyPremiumGroup, "Subscription is not a premium group");
    let l = i.useCallback(() => {
        (0, s.ZDy)(async () => {
          let {
            PremiumBrandRefreshSubscriptionCancellationModal: e
          } = await n.e("26526").then(n.bind(n, 48813));
          return n => (0, r.jsx)(e, b(g({}, n), {
            premiumSubscription: t,
            analyticsLocations: a
          }))
        })
      }, [t, a]),
      h = e => {
        throw Error("Not implemented")
      },
      E = () => {
        throw Error("Not implemented")
      },
      v = e => {
        throw Error("Not implemented")
      },
      {
        premiumGroupMembers: S,
        isLoading: I
      } = (0, c.Z)();
    if (I || null == S) return (0, r.jsx)(s.$jN, {});
    let {
      primary: T,
      members: C,
      invitedUsers: A
    } = S, N = f.v$, P = C.length, R = Math.max(0, N - P - A.length);
    return (0, r.jsxs)(s.$1m, {
      className: m.container,
      color: "nitro-pink",
      children: [(0, r.jsx)(y, {}), (0, r.jsxs)("div", {
        className: m.contentGrid,
        children: [(0, r.jsx)(O, {
          title: _.intl.formatToPlainString(p.default.NRCfnQ, {
            premiumGroupProductName: (0, f.sO)()
          }),
          description: _.intl.format(p.default.lvnrnb, {
            totalSeats: N,
            premiumGroupProductName: (0, f.sO)(),
            helpCenterLink: f.j3
          }),
          buttonText: _.intl.string(p.default.oO0EYw),
          onClick: l
        }), (0, r.jsxs)(s.Kqy, {
          direction: "vertical",
          padding: {
            left: 32,
            bottom: 12
          },
          gap: 0,
          children: [(0, r.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 4,
            padding: {
              top: 12,
              left: 4,
              right: 4,
              bottom: 10
            },
            children: [(0, r.jsxs)(s.Kqy, {
              direction: "horizontal",
              justify: "space-between",
              align: "center",
              gap: 4,
              children: [(0, r.jsx)(s.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: _.intl.string(p.default["oqw/KW"])
              }), (0, r.jsx)(u.Z, {
                onInvite: E
              })]
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: _.intl.format(p.default["/a/UoP"], {
                usedSeats: P,
                totalSeats: N
              })
            })]
          }), (0, r.jsx)(d.Vl, {
            user: T,
            isOwnUser: true
          }), C.map(e => (0, r.jsx)(d.UA, {
            user: e,
            onRemove: () => h(e)
          }, e.id)), A.map(e => (0, r.jsx)(d.gk, {
            user: e,
            onRemove: () => v(e)
          }, e.id)), Array.from({
            length: R
          }).map((e, t) => (0, r.jsx)(d.QU, {
            onInvite: E
          }, "seat-available-".concat(t)))]
        })]
      })]
    })
  }