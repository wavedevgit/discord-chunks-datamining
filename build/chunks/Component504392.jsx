/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
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
  Chunk905551 = require("./905551.js"),
  Chunk755458 = require("./755458.js"),
  Chunk773149 = require("./773149.jsx"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk730164 = require("./730164.js"),
  Chunk639777 = require("./639777.js"),
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

function L(e) {
  let {
    guildId: t,
    powerupListingId: o
  } = e, L = (0, m.BU)(t, "GuildPowerupsOverview");
  i.useEffect(() => {
    L && (0, p.ce)(t)
  }, [t, L]), i.useEffect(() => {
    (0, g.Sn)(t), (0, g.BN)(t)
  }, [t]), (0, b.Wj)(t);
  let k = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
    U = (0, h.Z)(t),
    D = i.useRef(false),
    {
      shouldShow: M,
      modalConfig: G
    } = (0, T.Z)(t, "GuildPowerupsOverview"),
    V = null == o && null != G,
    B = [];
  M && V && B.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [W, F] = (0, c.US)(B), z = (0, j._P)(t, L), K = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), X = (0, P.f)(K, t);
  return (i.useEffect(() => {
    if (null != o && !D.current)
      for (let e of z)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
            (0, N.Z)(t, n.powerup), D.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === o || n.powerups.some(e => e.skuId === o))) {
            D.current = true;
            let e = X[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(S.am);
                let t = e.pathname + e.search + e.hash;
                (0, f.dL)(t), D.current = false
              }
            });
            return
          }
        }
  }, [t, o, z, X]), i.useEffect(() => {
    null != W && null != G && (0, u.ZDy)(async () => {
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
        modalConfig: G,
        markAsDismissed: F
      }, t))
    }, {
      onCloseCallback: () => {
        F(y.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(W)
    })
  }, [t, W, F, G]), (null == k ? true : k.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: R.container,
    children: [(0, r.jsxs)(d.Z, {
      className: R.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: u.Ucv,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: A.intl.string(O.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: R.powerupsContainer,
        children: z.map(e => {
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
                  title: A.intl.string(O.default["TXY/b0"]), description: A.intl.string(O.default.aJv4PB)
                };
              case S.Us.PERK:
                return {
                  title: A.intl.string(O.default.TV3Vm8), description: A.intl.string(O.default.STx9hp)
                }
            }
          }(n), s = n === S.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: R.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: R.powerupHorizontalPadding,
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
              className: l()(R.powerupContainer, R.powerupHorizontalPadding, {
                [R.powerupsLevelContainer]: n === S.Us.LEVEL
              }),
              fade: true,
              children: i.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var o;
                    return (0, r.jsx)(Z.Z, {
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
                    return (0, r.jsx)(_.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(v.Z, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: R.sidebarContainer,
        children: [U ? (0, r.jsx)(C.Z, {
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