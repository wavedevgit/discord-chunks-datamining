/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Q5: () => w,
  Sf: () => y,
  ZP: () => P
}), n(566702), n(266796), n(47120);
var r, i = n(200651),
  s = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(512722),
  c = n.n(o),
  A = n(442837),
  d = n(692547),
  u = n(481060),
  g = n(570140),
  f = n(484614),
  m = n(852860),
  p = n(881052),
  h = n(751189),
  C = n(409059),
  b = n(518936),
  v = n(999382),
  x = n(58346),
  N = n(388032),
  j = n(864517),
  E = n(802138);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends(r = A.ZP.Store) {
  getTemplate() {
    let e = v.Z.getProps().guild;
    if (null == e) return null;
    let t = C.Z.getForGuild(e.id);
    return null != t && t.state !== x.Rj.RESOLVING ? t : null
  }
  showNotice() {
    let e = this.getTemplate();
    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
  }
  constructor(...e) {
    super(...e), I(this, "name", ""), I(this, "description", ""), I(this, "error", null), I(this, "reset", () => {
      let e = this.getTemplate();
      if (null != e) {
        var t, n;
        this.name = null !== (t = e.name) && void 0 !== t ? t : this.name, this.description = null !== (n = e.description) && void 0 !== n ? n : this.description
      } else this.name = "", this.description = "";
      this.emitChange()
    }), I(this, "setName", e => {
      this.name = e, this.emitChange()
    }), I(this, "setDescription", e => {
      this.description = e, this.emitChange()
    }), I(this, "setError", e => {
      this.error = e, this.emitChange()
    }), I(this, "save", async () => {
      await h.Z.updateGuildTemplate(v.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
    })
  }
}
I(O, "displayName", "GuildSettingsTemplateMetadataStore_");
let y = new O(g.Z);

function w() {
  let [e, t] = s.useState(!1), n = async () => {
    t(!0), await y.save(), t(!1)
  };
  return (0, i.jsx)(m.Z, {
    submitting: e,
    onReset: y.reset,
    onSave: n
  })
}

function P() {
  return (0, i.jsx)(u.hjN, {
    className: E.marginBottom4,
    children: (0, i.jsxs)(u.y5t, {
      component: (0, i.jsx)(u.vwX, {
        tag: u.RB0.H1,
        children: N.NW.string(N.t.KUw7Sk)
      }),
      children: [(0, i.jsx)(u.R94, {
        className: E.marginBottom20,
        type: u.geA.DESCRIPTION,
        children: N.NW.format(N.t.c0m8bG, {})
      }), (0, i.jsx)(D, {}), (0, i.jsx)(u.$i$, {
        className: j.divider
      }), (0, i.jsx)(B, {})]
    })
  })
}

function B() {
  let {
    guild: e
  } = v.Z.getProps();
  c()(null != e, "guild cannot be null");
  let t = (0, A.e7)([y], () => y.error),
    [n, r] = s.useState(!0),
    {
      loading: a,
      guildTemplate: l
    } = function(e) {
      let [t, n] = s.useState(!0);
      return s.useEffect(() => {
        (async function() {
          n(!0);
          try {
            await h.Z.loadTemplatesForGuild(e), n(!1)
          } catch (e) {
            y.setError(new p.Hx(e))
          }
        })()
      }, [e]), {
        loading: t,
        guildTemplate: (0, A.e7)([C.Z], () => C.Z.getForGuild(e), [e])
      }
    }(e.id);
  if (s.useEffect(() => {
      if (n && !a) {
        if (null != l) {
          var e, t;
          y.setName(null !== (e = l.name) && void 0 !== e ? e : ""), y.setDescription(null !== (t = l.description) && void 0 !== t ? t : "")
        }
        r(!1)
      }
    }, [n, l, a]), s.useEffect(() => () => {
      y.reset(), y.setError(null)
    }, []), n) return null != t ? (0, i.jsx)(u.Text, {
    color: "text-danger",
    variant: "text-sm/normal",
    children: t.message
  }) : (0, i.jsx)(u.$jN, {
    className: E.marginTop40
  });
  let o = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S, {}), (0, i.jsx)(L, {
      guild: e,
      guildTemplate: l
    }), o ? (0, i.jsx)(u.Text, {
      className: E.marginTop8,
      color: "text-danger",
      variant: "text-sm/normal",
      children: t.getAnyErrorMessage()
    }) : null]
  })
}

function D() {
  return (0, i.jsxs)("div", {
    className: j.descriptionBox,
    children: [(0, i.jsxs)("div", {
      className: j.descriptionSection,
      children: [(0, i.jsx)(u.X6q, {
        variant: "eyebrow",
        children: N.NW.string(N.t["f8u+VF"])
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.owK, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t.K2tn19)]
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.owK, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t.om5gNj)]
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.owK, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.GREEN_360.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t["/VNqdH"])]
      })]
    }), (0, i.jsxs)("div", {
      className: j.descriptionSection,
      children: [(0, i.jsx)(u.X6q, {
        variant: "eyebrow",
        children: N.NW.string(N.t["8zhJEh"])
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.k$p, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t.WOKI6u)]
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.k$p, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t.ddhDJC)]
      }), (0, i.jsxs)("div", {
        className: j.descriptionRow,
        children: [(0, i.jsx)(u.k$p, {
          size: "md",
          className: j.descriptionIcon,
          color: d.Z.unsafe_rawColors.RED_400.css,
          secondaryColor: d.Z.unsafe_rawColors.WHITE_500.css
        }), N.NW.string(N.t["6Q/DHh"])]
      })]
    })]
  })
}

function T(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, i.jsx)(u.sYh, {
    dismissable: !0,
    header: N.NW.string(N.t["cN/RFB"]),
    confirmText: N.NW.string(N.t["cN/RFB"]),
    cancelText: N.NW.string(N.t["ETE/oK"]),
    onCancel: t,
    onConfirm: n,
    children: (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: N.NW.string(N.t.apCQv7)
    })
  })
}

function S() {
  let e = (0, A.e7)([y], () => y.name),
    t = (0, A.e7)([y], () => y.description),
    n = (0, A.e7)([y], () => y.error);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.xJW, {
      className: E.marginBottom20,
      title: N.NW.string(N.t.z1a9R0),
      error: null == n ? void 0 : n.getFirstFieldErrorMessage("name"),
      children: (0, i.jsx)(u.oil, {
        value: e,
        onChange: e => y.setName(e),
        placeholder: N.NW.string(N.t.bMlpvr),
        maxLength: 100
      })
    }), (0, i.jsx)(u.xJW, {
      className: E.marginBottom20,
      title: N.NW.string(N.t.GxirWV),
      error: null == n ? void 0 : n.getFirstFieldErrorMessage("description"),
      children: (0, i.jsx)(u.Kx8, {
        value: t,
        onChange: e => y.setDescription(e),
        placeholder: N.NW.string(N.t.n1FBXl),
        maxLength: 120
      })
    })]
  })
}

function L(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e;
  return null == n ? (0, i.jsx)(R, {
    guild: t
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.xJW, {
      title: N.NW.string(N.t.zGGcLy),
      children: (0, i.jsx)(f.Z, {
        buttonLook: u.zxk.Looks.FILLED,
        buttonColor: u.zxk.Colors.BRAND,
        value: (0, b.Z)(n.code)
      })
    }), n.isDirty && (0, i.jsx)(u.Text, {
      color: "text-warning",
      className: E.marginTop8,
      variant: "text-sm/normal",
      children: N.NW.string(N.t.aWsjtL)
    }), (0, i.jsxs)("div", {
      className: l()(E.marginTop20, j.buttonContainer),
      children: [n.isDirty && (0, i.jsx)(Q, {
        guild: t,
        guildTemplate: n
      }), (0, i.jsxs)("div", {
        className: j.rightButtonContainer,
        children: [(0, i.jsx)(Z, {
          guild: t,
          guildTemplate: n
        }), (0, i.jsx)(W, {
          guildTemplate: n
        })]
      })]
    }), n.isDirty && (0, i.jsx)("div", {
      className: j.lastSync,
      children: N.NW.format(N.t.v0AVur, {
        timestamp: new Date(n.updatedAt)
      })
    })]
  })
}

function R(e) {
  let {
    guild: t
  } = e, n = (0, A.e7)([y], () => y.name), [r, a] = s.useState(!1), l = async () => {
    y.setError(null), a(!0);
    try {
      await h.Z.createGuildTemplate(t.id, y.name, y.description)
    } catch (e) {
      y.setError(new p.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsx)(u.zxk, {
    submitting: r,
    disabled: !(null != n && n.trim().length >= 2),
    color: u.zxk.Colors.BRAND,
    onClick: l,
    children: N.NW.string(N.t.Wxdi8P)
  })
}

function Q(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = s.useState(!1), l = async () => {
    y.setError(null), a(!0);
    try {
      await h.Z.syncGuildTemplate(t.id, n.code)
    } catch (e) {
      y.setError(new p.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsx)(u.zxk, {
    submitting: r,
    className: j.button,
    onClick: l,
    children: N.NW.string(N.t["Nw+0Y2"])
  })
}

function Z(e) {
  let {
    guild: t,
    guildTemplate: n
  } = e, [r, a] = s.useState(!1), l = async () => {
    y.setError(null);
    try {
      await h.Z.deleteGuildTemplate(t.id, n.code), y.setName(""), y.setDescription("")
    } catch (e) {
      y.setError(new p.Hx(e))
    }
    a(!1)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.zxk, {
      look: u.zxk.Looks.OUTLINED,
      className: j.button,
      color: u.zxk.Colors.RED,
      onClick: () => a(!0),
      children: N.NW.string(N.t["cN/RFB"])
    }), r ? (0, i.jsx)(T, {
      confirm: l,
      cancel: () => a(!1)
    }) : null]
  })
}

function W(e) {
  let {
    guildTemplate: t
  } = e;
  return (0, i.jsx)(u.zxk, {
    color: u.zxk.Colors.PRIMARY,
    className: j.button,
    onClick: () => (0, u.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("10778"), n.e("73923")]).then(n.bind(n, 112951));
      return n => {
        var r, s;
        return (0, i.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              I(e, t, n[t])
            })
          }
          return e
        }({}, n), s = s = {
          guildTemplate: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
        }), r))
      }
    }),
    children: N.NW.string(N.t.YI3iV1)
  })
}