/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk755458 = require("./755458.js"),
  Chunk773149 = require("./773149.jsx"),
  Chunk905128 = require("./905128.js"),
  Chunk730164 = require("./730164.js"),
  Chunk639777 = require("./639777.js"),
  Chunk124431 = require("./124431.js"),
  Chunk169010 = require("./169010.js"),
  Chunk27237 = require("./27237.jsx"),
  Chunk426771 = require("./426771.jsx"),
  Chunk51859 = require("./51859.jsx"),
  Chunk184478 = require("./184478.jsx"),
  Chunk877362 = require("./877362.jsx"),
  Chunk460608 = require("./460608.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk28239 = require("./28239.js"),
  Chunk196806 = require("./196806.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk921944 = require("./921944.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk919919 = require("./919919.js");

function R(e) {
  let {
    guildId: t,
    powerupListingId: o
  } = e;
  (0, b.Z)(t);
  let R = (0, p.BU)(t, "GuildPowerupsOverview");
  (0, g.Wj)(t);
  let L = (0, a.e7)([v.Z], () => v.Z.getStateForGuild(t)),
    k = (0, x.Z)(t),
    U = i.useRef(false),
    {
      shouldShow: D,
      modalConfig: M
    } = (0, P.Z)(t, "GuildPowerupsOverview"),
    G = null == o && null != M,
    V = [];
  D && G && V.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [B, W] = (0, c.US)(V), F = (0, h._P)(t, R), z = F.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), K = (0, E.f)(z, t);
  return (i.useEffect(() => {
    if (null != o && !U.current)
      for (let e of F)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
            (0, T.Z)(t, n.powerup), U.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === o || n.powerups.some(e => e.skuId === o))) {
            U.current = true;
            let e = K[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(S.am);
                let t = e.pathname + e.search + e.hash;
                (0, f.dL)(t), U.current = false
              }
            });
            return
          }
        }
  }, [t, o, F, K]), i.useEffect(() => {
    null != B && null != M && (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("61879").then(n.bind(n, 802426));
      return t => (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        modalConfig: M,
        markAsDismissed: W
      }, t))
    }, {
      onCloseCallback: () => {
        W(y.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(B)
    })
  }, [t, B, W, M]), (null == L ? true : L.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: O.container,
    children: [(0, r.jsxs)(d.Z, {
      className: O.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: u.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: A.intl.string(N.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: O.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: O.powerupsContainer,
        children: F.map(e => {
          let {
            type: n,
            listings: i
          } = e, {
            title: o,
            description: a
          } = function(e) {
            switch (e) {
              case S.Us.LEVEL:
                return {
                  title: A.intl.string(N.default["TXY/b0"]), description: A.intl.string(N.default.aJv4PB)
                };
              case S.Us.PERK:
                return {
                  title: A.intl.string(N.default.TV3Vm8), description: A.intl.string(N.default.STx9hp)
                }
            }
          }(n), s = n === S.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: O.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: O.powerupHorizontalPadding,
              children: [(0, r.jsx)(u.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: o
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: l()(O.powerupContainer, O.powerupHorizontalPadding, {
                [O.powerupsLevelContainer]: n === S.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var o;
                    return (0, r.jsx)(j.Z, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (o = i[n + 1]) ? true : o.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(w.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(Z.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(m.Z, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: O.sidebarContainer,
        children: [k ? (0, r.jsx)(_.Z, {
          guildId: t
        }) : (0, r.jsx)(C.Z, {
          guildId: t
        }), (0, r.jsx)(I.Z, {
          guildId: t
        })]
      })]
    })]
  })
}