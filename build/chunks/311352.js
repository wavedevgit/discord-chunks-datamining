/** Chunk was on 86029 **/
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(399606),
  l = n(704215),
  o = n(481060),
  a = n(239091),
  s = n(765585),
  c = n(870569),
  u = n(819640),
  d = n(556296),
  p = n(13140),
  h = n(924557),
  f = n(435064),
  g = n(39604),
  m = n(981631),
  b = n(388032),
  y = n(64960);

function v(e) {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("21960").then(n.bind(n, 999466));
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
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}

function O() {
  (0, g.C1)()
}
let j = e => {
    let {
      keybindString: t,
      children: n
    } = e, i = (e, t) => {
      e.stopPropagation(), e.preventDefault(), null == t || t()
    };
    return (0, r.jsx)(o.yRy, {
      shouldShow: !1,
      position: "top",
      align: "center",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(s.Z, {
          dismissibleContent: l.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
          shouldUseHorizontalButtons: !0,
          inlineArt: !0,
          artClassName: y.clipsEducationArt,
          position: "top",
          header: (0, r.jsx)("div", {
            className: y.header,
            children: b.NW.format(b.t["o+srEx"], {
              keybind: t,
              keybindHook: () => (0, r.jsx)("span", {
                className: y.keybindHintKeys,
                children: (0, r.jsx)(o.M2$, {
                  className: y.keybindShortcut,
                  shortcut: t
                })
              })
            })
          }),
          headerClassName: y.clipsEducationHeader,
          body: (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: y.bodyText,
            children: b.NW.format(b.t.DWeRm5, {
              keybindHook: () => (0, r.jsx)("div", {
                className: y.keyCombo,
                children: t
              }),
              keybind: t
            })
          }),
          onClose: e => {
            i(e, n)
          }
        })
      },
      children: () => n
    })
  },
  _ = () => {
    let e = (0, i.e7)([u.Z], () => u.Z.hasLayers()),
      t = (0, h.Go)(),
      {
        clipsEnabled: n,
        isAtMaxSavingClipsOperations: l
      } = (0, i.cj)([f.Z], () => ({
        clipsEnabled: f.Z.getSettings().clipsEnabled,
        isAtMaxSavingClipsOperations: f.Z.getIsAtMaxSaveClipOperations()
      })),
      a = (0, i.e7)([d.ZP], () => d.ZP.getKeybindForAction(m.kg4.SAVE_CLIP));
    if (!(t && n) || null == a || e) return null;
    let s = p.BB(a.shortcut, !0);
    return (0, r.jsx)(j, {
      keybindString: s,
      children: (0, r.jsx)(c.Z, {
        disabled: l,
        tooltipText: null != a ? b.NW.formatToPlainString(b.t.HIMcv7, {
          hotkey: p.BB(null == a ? void 0 : a.shortcut, !0)
        }) : b.NW.string(b.t.s52pjo),
        onClick: O,
        onContextMenu: v,
        icon: o.AlX
      })
    })
  }