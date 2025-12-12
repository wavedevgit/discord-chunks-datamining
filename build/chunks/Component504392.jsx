/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk905551 = require("./905551.js"),
  Chunk755458 = require("./755458.js"),
  Chunk773149 = require("./773149.jsx"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk238343 = require("./238343.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk27237 = require("./27237.jsx"),
  Chunk426771 = require("./426771.jsx"),
  Chunk51859 = require("./51859.jsx"),
  Chunk184478 = require("./184478.jsx"),
  Chunk877362 = require("./877362.jsx"),
  Chunk460608 = require("./460608.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk332538 = require("./332538.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk921944 = require("./921944.js"),
  Chunk5238 = require("./5238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823441 = require("./823441.js");

function R(e) {
  let {
    guildId: t,
    powerupListingId: l
  } = e, R = (0, m.BU)(t, "GuildPowerupsOverview");
  i.useEffect(() => {
    R && (0, f.ce)(t)
  }, [t, R]), i.useEffect(() => {
    (0, v.Sn)(t), (0, v.BN)(t)
  }, [t]), (0, T.Wj)(t);
  let k = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
    U = (0, b.Z)(t),
    D = i.useRef(false),
    {
      shouldShow: M,
      modalConfig: V
    } = (0, P.K)(t, "GuildPowerupsOverview"),
    G = null == l && null != V,
    B = [];
  M && G && B.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [W, F] = (0, c.US)(B), z = (0, h._P)(t, R), K = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), X = (0, N.f)(K, t);
  return (i.useEffect(() => {
    if (null != l && !D.current)
      for (let e of z)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
            (0, _.KE)(t, n.powerup), D.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === l || n.powerups.some(e => e.skuId === l))) {
            D.current = true;
            let e = X[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(y.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), D.current = false
              }
            });
            return
          }
        }
  }, [t, l, z, X]), i.useEffect(() => {
    null != W && null != V && (0, u.ZDy)(async () => {
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
        modalConfig: V,
        markAsDismissed: F
      }, t))
    }, {
      onCloseCallback: () => {
        F(O.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(W)
    })
  }, [t, W, F, V]), (null == k ? true : k.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: L.container,
    children: [(0, r.jsxs)(d.Z, {
      className: L.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: u.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: A.intl.string(S.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: L.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: L.powerupsContainer,
        children: z.map(e => {
          let {
            type: n,
            listings: i
          } = e, {
            title: l,
            description: a
          } = function(e) {
            switch (e) {
              case y.Us.LEVEL:
                return {
                  title: A.intl.string(S.default["TXY/b0"]), description: A.intl.string(S.default.aJv4PB)
                };
              case y.Us.PERK:
                return {
                  title: A.intl.string(S.default.TV3Vm8), description: A.intl.string(S.default.STx9hp)
                }
            }
          }(n), s = n === y.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: L.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: L.powerupHorizontalPadding,
              children: [(0, r.jsx)(u.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: l
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)(s, {
              orientation: "horizontal",
              className: o()(L.powerupContainer, L.powerupHorizontalPadding, {
                [L.powerupsLevelContainer]: n === y.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var l;
                    return (0, r.jsx)(j.Z, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (l = i[n + 1]) ? true : l.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(Z.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(C.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(g.Z, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: L.sidebarContainer,
        children: [U ? (0, r.jsx)(w.Z, {
          guildId: t
        }) : (0, r.jsx)(I.Z, {
          guildId: t
        }), (0, r.jsx)(E.Z, {
          guildId: t
        })]
      })]
    })]
  })
}