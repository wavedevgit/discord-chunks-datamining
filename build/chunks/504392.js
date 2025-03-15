/** Chunk was on 44799 **/
t.d(n, {
  Z: () => Z
}), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(442837),
  s = t(481060),
  a = t(413335),
  l = t(984370),
  c = t(713081),
  d = t(905128),
  u = t(111360),
  x = t(27237),
  p = t(51859),
  v = t(953478),
  m = t(460608),
  b = t(279604),
  _ = t(535396),
  j = t(268359),
  h = t(388032),
  f = t(614475);
let g = [_.Us.LEVEL, _.Us.PERK];

function Z(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e;
  i.useEffect(() => {
    (0, c.Sn)(n), (0, c.Fm)(n)
  }, [n]);
  let Z = (0, u.Z)(n),
    C = (0, o.e7)([d.Z], () => {
      var e;
      return null === (e = d.Z.getStateForGuild(n)) || void 0 === e ? void 0 : e.powerups
    }),
    N = i.useRef(!1);
  return (i.useEffect(() => {
    var e;
    if (null == t) return;
    let r = null == C ? void 0 : null === (e = C.get) || void 0 === e ? void 0 : e.call(C, t);
    null == r || N.current || ((0, b.KE)(n, r), N.current = !0)
  }, [n, t, C]), null == Z) ? null : (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsxs)(l.Z, {
      hideSearch: !0,
      toolbar: (0, r.jsx)("div", {}),
      children: [(0, r.jsx)(l.Z.Icon, {
        icon: a.Z,
        disabled: !0,
        "aria-label": ""
      }), (0, r.jsx)(l.Z.Title, {
        children: h.NW.string(j.Z.yv3DJC)
      }), (0, r.jsx)(l.Z.Divider, {})]
    }), (0, r.jsxs)("div", {
      className: f.contentContainer,
      children: [(0, r.jsx)("div", {
        className: f.powerupsContainer,
        children: g.map(e => {
          let t = Z.get(e);
          if (null == t) return;
          let {
            title: o,
            description: a
          } = function(e) {
            switch (e) {
              case _.Us.LEVEL:
                return {
                  title: h.NW.string(j.Z["TXY/b2"]), description: h.NW.string(j.Z.aJv4PD)
                };
              case _.Us.PERK:
                return {
                  title: h.NW.string(j.Z.TV3Vm5), description: h.NW.string(j.Z.NHjM1t)
                }
            }
          }(e);
          return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsxs)("div", {
              className: f.powerupTextContainer,
              children: [(0, r.jsx)(s.X6q, {
                variant: "heading-lg/semibold",
                children: o
              }), (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: a
              })]
            }), (0, r.jsx)("div", {
              className: f.powerupContainer,
              children: t.map((e, i) => {
                switch (e.type) {
                  case _.Us.LEVEL:
                    return (0, r.jsx)(x.ZP, {
                      guildId: n,
                      index: i,
                      powerup: e,
                      nextPowerup: t[i + 1]
                    }, "powerup-".concat(e.skuId));
                  case _.Us.PERK:
                    return (0, r.jsx)(p.Z, {
                      guildId: n,
                      powerup: e
                    }, "powerup-".concat(e.skuId))
                }
              })
            })]
          }, "section-".concat(e))
        })
      }), (0, r.jsxs)("div", {
        className: f.sidebarContainer,
        children: [(0, r.jsx)(v.Z, {
          guildId: n
        }), (0, r.jsx)(m.Z, {
          guildId: n
        })]
      })]
    })]
  })
}