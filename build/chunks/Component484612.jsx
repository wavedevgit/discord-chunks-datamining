/** Chunk was on 88615 **/
/** chunk id: 484612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./321073.js"), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk488803 = require("./488803.js"),
  Chunk14081 = require("./14081.jsx"),
  Chunk843095 = require("./843095.jsx"),
  Chunk645619 = require("./645619.js"),
  Chunk489306 = require("./489306.js"),
  Chunk363487 = require("./363487.js"),
  Chunk884928 = require("./884928.js"),
  Chunk884684 = require("./884684.js"),
  Chunk983398 = require("./983398.jsx"),
  Chunk194867 = require("./194867.jsx"),
  Chunk149854 = require("./149854.jsx"),
  Chunk864450 = require("./864450.jsx"),
  Chunk697865 = require("./697865.jsx"),
  Chunk297407 = require("./297407.jsx"),
  Chunk271484 = require("./271484.jsx"),
  Chunk289642 = require("./289642.js"),
  Chunk915667 = require("./915667.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk568065 = require("./568065.js"),
  Chunk49999 = require("./49999.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk377514 = require("./377514.js");

function D(e) {
  let {
    guildId: t,
    powerupListingId: i
  } = e;
  (0, h.A)(t);
  let D = (0, f.C$)(t, "GuildPowerupsOverview");
  (0, _.c2)(t);
  let U = (0, s.bG)([A.A], () => A.A.getStateForGuild(t)),
    M = (0, x.A)(t),
    V = l.useRef(false),
    {
      shouldShow: B,
      modalConfig: W
    } = (0, N.A)(t, "GuildPowerupsOverview"),
    F = null == i && null != W,
    K = [];
  B && F && K.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
  let [J, Y] = (0, c.kn)(K), z = (0, b.MO)(t, D), X = z.flatMap(e => e.listings).filter(e => "multiPerk" === e.type).map(e => e.group), H = (0, C.g)(X, t);
  return (l.useEffect(() => {
    if (null != i && !V.current)
      for (let e of z)
        for (let n of e.listings) {
          if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
            (0, O.A)(t, n.powerup), V.current = true;
            return
          }
          if ("multiPerk" === n.type && (n.group === i || n.powerups.some(e => e.skuId === i))) {
            V.current = true;
            let e = H[n.group];
            if (null == e) return;
            e.openModal(n.powerups, {
              onModalClose: () => {
                let e = new URL(window.location.href);
                e.searchParams.delete(P.G0);
                let t = e.pathname + e.search + e.hash;
                (0, m.bG)(t), V.current = false
              }
            });
            return
          }
          if ("gameServer" === n.type && i === L.W5) {
            (0, g.A)({
              guildId: t,
              analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW
            }), V.current = true;
            return
          }
        }
  }, [t, i, z, H]), l.useEffect(() => {
    null != J && null != W && (0, u.mMO)(async () => {
      let {
        default: e
      } = await n.e("86618").then(n.bind(n, 442241));
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
        modalConfig: W,
        markAsDismissed: Y
      }, t))
    }, {
      onCloseCallback: () => {
        Y(k.i.USER_DISMISS)
      },
      modalKey: "dismissible_content_".concat(J)
    })
  }, [t, J, Y, W]), (null == U ? true : U.powerupCatalog) == null) ? null : (0, r.jsxs)("div", {
    className: R.kL,
    children: [(0, r.jsxs)(p.A, {
      className: R.KE,
      hideSearch: true,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(p.A.Icon, {
        icon: u._Jp,
        "aria-label": ""
      }), (0, r.jsx)(p.A.Title, {
        children: G.intl.string(T.default.yv3DJJ)
      })]
    }), (0, r.jsxs)("div", {
      className: R.hQ,
      children: [(0, r.jsx)(u.IpV, {
        className: R.DO,
        children: z.map(e => {
          let {
            type: n,
            listings: l
          } = e, {
            title: i,
            description: s
          } = function(e) {
            switch (e) {
              case P.o9.LEVEL:
                return {
                  title: G.intl.string(T.default["TXY/b0"]), description: G.intl.string(T.default.aJv4PB)
                };
              case P.o9.PERK:
                return {
                  title: G.intl.string(T.default.TV3Vm8), description: G.intl.string(T.default.STx9hp)
                }
            }
          }(n), a = n === P.o9.LEVEL ? u.IpV : "div";
          return (0, r.jsxs)("div", {
            className: R.lt,
            children: [(0, r.jsxs)("div", {
              className: R.kn,
              children: [(0, r.jsx)(u.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: i
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: s
              })]
            }), (0, r.jsx)(a, {
              orientation: "horizontal",
              className: o()(R.qJ, R.kn, {
                [R.dU]: n === P.o9.LEVEL
              }),
              fade: true,
              children: l.map((e, n) => {
                switch (e.type) {
                  case "singleLevel":
                    var i;
                    return (0, r.jsx)(j.A, {
                      guildId: t,
                      index: n,
                      powerup: e.powerup,
                      nextPowerup: null == (i = l[n + 1]) ? true : i.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "singlePerk":
                    return (0, r.jsx)(w.A, {
                      guildId: t,
                      powerup: e.powerup
                    }, "powerup-".concat(e.powerup.skuId));
                  case "multiPerk":
                    return (0, r.jsx)(E.A, {
                      guildId: t,
                      group: e.group,
                      powerups: e.powerups
                    }, "powerup-group-".concat(e.group));
                  case "gameServer":
                    return (0, r.jsx)(v.A, {
                      guildId: t
                    }, "powerup-game-server")
                }
              })
            })]
          }, "section-".concat(n))
        })
      }), (0, r.jsxs)("div", {
        className: R.so,
        children: [M ? (0, r.jsx)(y.A, {
          guildId: t
        }) : (0, r.jsx)(I.A, {
          guildId: t
        }), (0, r.jsx)(S.A, {
          guildId: t
        })]
      })]
    })]
  })
}