/** Chunk was on 37697 **/
n.d(t, {
  Z: () => g
}), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  a = n(442837),
  l = n(481060),
  o = n(214912),
  s = n(703656),
  c = n(314897),
  d = n(900849),
  u = n(881294),
  p = n(981631),
  m = n(388032);
let h = "redirect_to_support_server";

function g(e) {
  let {
    application: t,
    className: n
  } = e, {
    onGoToSupportServer: g
  } = function(e) {
    let t = (0, u.nu)(),
      n = (0, a.e7)([c.default], () => c.default.getSessionId()),
      r = i.useCallback(async () => {
        try {
          var t;
          let n = null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id;
          if (null != n) {
            (0, u.zZ)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
              application_id: e.id,
              support_guild_id: n
            });
            let t = {
              page: p.ZY5.APPLICATION_DIRECTORY
            };
            await (0, d.Ub)(n, t, {
              setsHistorySnapshot: !1
            })
          }
        } catch (e) {}
      }, [e]);
    return i.useEffect(() => {
      let i = new URL(location.href);
      if (null != e && t && null != n && "true" === i.searchParams.get(h)) {
        i.searchParams.delete(h);
        let e = i.pathname + i.search;
        (0, s.dL)(e), r()
      }
    }, [t, r, n, e]), {
      onGoToSupportServer: i.useCallback(() => {
        var n;
        null != (null == e ? void 0 : null === (n = e.guild) || void 0 === n ? void 0 : n.id) && (t ? r() : (0, u.rf)({
          [h]: "true"
        }))
      }, [e, r, t])
    }
  }(t);
  return null != t.guild && t.guild.features.includes(p.oNc.DISCOVERABLE) ? (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(l.X6q, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      children: m.NW.string(m.t.KJEO29)
    }), (0, r.jsx)(o.Z, {
      guild: t.guild,
      onClick: g
    })]
  }) : null
}