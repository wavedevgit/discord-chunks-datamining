/** Chunk was on 44799 **/
/** chunk id: 504392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk639777 = require("./639777.js"),
  Chunk169010 = require("./169010.js"),
  Chunk27237 = require("./27237.jsx"),
  Chunk426771 = require("./426771.jsx"),
  Chunk51859 = require("./51859.jsx"),
  Chunk184478 = require("./184478.jsx"),
  Chunk877362 = require("./877362.jsx"),
  Chunk460608 = require("./460608.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk332538 = require("./332538.jsx"),
  Chunk857666 = require("./857666.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk921944 = require("./921944.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941818 = require("./941818.js");
let T = [Chunk535396.Us.LEVEL, Chunk535396.Us.PERK];

function A(e) {
  let {
    guildId: t,
    powerupListingId: i
  } = e;
  o.useEffect(() => {
    (0, f.Sn)(t), (0, f.Fm)(t)
  }, [t]), (0, O.Wj)(t);
  let A = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
    R = (0, g.Z)(t),
    k = o.useRef(false),
    {
      shouldShow: L,
      modalConfig: D
    } = (0, I.K)(t, "GuildPowerupsOverview"),
    U = null == i && null != D,
    V = [];
  L && U && V.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [M, B] = (0, c.US)(V), G = o.useMemo(() => T.reduce((e, t) => {
    let n = null == A ? true : A.powerupCatalog[t];
    if (null == n) return e;
    let r = (0, x.S)(n);
    return e.push({
      type: t,
      listings: r
    }), e
  }, []), [null == A ? true : A.powerupCatalog]), W = G.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), z = (0, y.f)(W, t);
  return (o.useEffect(() => {
    if (null != i && !k.current)
      for (let e of G)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
            (0, C.KE)(t, n.powerup), k.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
            k.current = true;
            let e = z[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(w.am);
                let t = e.pathname + e.search + e.hash;
                (0, p.dL)(t), k.current = false
              }
            });
            return
          }
        }
  }, [t, i, G, z]), o.useEffect(() => {
    null != M && null != D && (0, u.ZDy)(async () => {
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
        modalConfig: D,
        markAsDismissed: B
      }, t))
    }, {
      onCloseCallback: () => {
        B(P.L.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(M)
    })
  }, [t, M, B, D]), (null == A ? true : A.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsxs)(d.Z, {
      className: S.toolbar,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(d.Z.Icon, {
        icon: u.$Eu,
        "aria-label": ""
      }), (0, r.jsx)(d.Z.Title, {
        children: Z.intl.string(N.default.yv3DJC)
      })]
    }), (0, r.jsxs)("div", {
      className: S.contentContainer,
      children: [(0, r.jsx)(u.zJl, {
        className: S.powerupsContainer,
        children: G.map(e => {
          let {
            type: n,
            listings: o
          } = e, {
            title: i,
            description: s
          } = function(e) {
            switch (e) {
              case w.Us.LEVEL:
                return {
                  title: Z.intl.string(N.default["TXY/b2"]), description: Z.intl.string(N.default.aJv4PD)
                };
              case w.Us.PERK:
                return {
                  title: Z.intl.string(N.default.TV3Vm5), description: Z.intl.string(N.default.STx9ho)
                }
            }
          }(n), a = n === w.Us.LEVEL ? u.zJl : "div";
          return (0, r.jsxs)("div", {
            className: S.powerupsSection,
            children: [(0, r.jsxs)("div", {
              className: S.powerupHorizontalPadding,
              children: [(0, r.jsx)(u.X6q, {
                color: "header-primary",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: s
              })]
            }), (0, r.jsx)(a, {
              orientation: "horizontal",
              className: l()(S.powerupContainer, S.powerupHorizontalPadding, {
                [S.powerupsLevelContainer]: n === w.Us.LEVEL
              }),
              fade: true,
              children: o.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var i;
                    return (0, r.jsx)(v.ZP, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (i = o[n + 1]) ? true : i.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(b.Z, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(_.Z, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group))
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: S.sidebarContainer,
        children: [R ? (0, r.jsx)(j.Z, {
          guildId: t
        }) : (0, r.jsx)(h.Z, {
          guildId: t
        }), (0, r.jsx)(E.Z, {
          guildId: t
        })]
      })]
    })]
  })
}