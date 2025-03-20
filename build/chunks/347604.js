/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(392711),
  a = n.n(s),
  l = n(252759),
  o = n(442837),
  A = n(481060),
  c = n(650774),
  d = n(21297),
  u = n(118215),
  g = n(30766),
  f = n(166184),
  m = n(654351),
  p = n(259674),
  h = n(845377),
  C = n(981631),
  b = n(388032),
  v = n(72397),
  x = n(716455);
let N = ["322850917248663552", "172018499005317120", "414234792121597953", "228406572756369408"],
  j = ["620723483965653003", "662246299369734154", "181970867549503489", "102860784329052160"],
  E = e => {
    let {
      guild: t,
      onEnableDiscovery: n,
      isGuildAdmin: s
    } = e, [E, I] = (0, l.Z)(() => [a().sample(N), a().sample(j)], []);
    i.useEffect(() => {
      (0, d.z)([E, I])
    }, [E, I]);
    let [O, y] = (0, o.Wu)([g.Z], () => [g.Z.getGuild(E), g.Z.getGuild(I)], [E, I]), {
      canEnableDiscovery: w,
      isPendingSuccess: P
    } = (0, o.cj)([u.ZP], () => ({
      canEnableDiscovery: u.ZP.passesChecklist(t.id),
      isPendingSuccess: u.ZP.isPendingSuccess(t.id)
    }), [t.id]), [B, D] = (0, o.Wu)([c.Z], () => [null, c.Z.getMemberCount(t.id)], [t.id]), T = i.useCallback(() => {
      null != n && n()
    }, [n]), S = null;
    return s ? P ? S = b.NW.string(b.t.zP8DFx) : w || (S = b.NW.string(b.t.ABFu19)) : S = b.NW.string(b.t["5VbUBw"]), (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsx)("img", {
        alt: "",
        src: x,
        className: v.sparkles
      }), (0, r.jsxs)("div", {
        className: v.discoverPreview,
        children: [(0, r.jsx)(f.Z, {
          className: v.placeholderCard,
          disabled: !0,
          small: !0,
          loading: null == O,
          guild: O
        }), (0, r.jsx)(f.Z, {
          className: v.previewCard,
          guild: t,
          description: b.NW.string(b.t["0k7fyM"]),
          presenceCount: B,
          memberCount: D
        }), (0, r.jsx)(f.Z, {
          className: v.placeholderCard,
          disabled: !0,
          small: !0,
          loading: null == y,
          guild: y
        })]
      }), (0, r.jsx)(A.X6q, {
        className: v.header,
        variant: "heading-xl/semibold",
        children: b.NW.string(b.t.UwPrKS)
      }), (0, r.jsx)(A.Text, {
        variant: "text-md/normal",
        className: v.valueProp,
        color: "header-secondary",
        children: b.NW.format(b.t.BhkgBg, {
          onLinkClick: () => (0, p.lW)({
            articleId: C.BhN.SERVER_DISCOVERY,
            guildId: t.id,
            pageView: m.d5.INTRO
          })
        })
      }), (0, r.jsx)(A.Text, {
        variant: "text-md/normal",
        className: v.byline,
        color: "header-secondary",
        children: b.NW.format(b.t.ALSi8v, {
          onGuidelinesClick: () => (0, p.lW)({
            articleId: C.BhN.SERVER_DISCOVERY_GUIDELINES,
            guildId: t.id,
            pageView: m.d5.INTRO
          })
        })
      }), (0, r.jsx)(A.ua7, {
        text: S,
        children: e => {
          var t, n;
          return (0, r.jsx)(A.zxk, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            className: v.enableButton,
            color: A.zxk.Colors.BRAND,
            size: A.zxk.Sizes.LARGE,
            disabled: !w || !s,
            onClick: T,
            children: b.NW.string(b.t.oBIZwc)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      }), (0, r.jsx)(h.Z, {
        className: v.checklist,
        guild: t,
        guildId: t.id,
        headerContent: (0, r.jsx)(A.X6q, {
          variant: "heading-md/semibold",
          children: w ? b.NW.string(b.t.XAgDU1) : b.NW.format(b.t["+6Hylp"], {
            doesNotHook: (e, t) => (0, r.jsx)("strong", {
              className: v.doesNot,
              children: e
            }, t)
          })
        })
      })]
    })
  }