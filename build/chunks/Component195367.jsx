/** Chunk was on 61 **/
/** chunk id: 195367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk516129 = require("./516129.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk405613 = require("./405613.js"),
  Chunk440371 = require("./440371.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230334 = require("./230334.js");

function E(e) {
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
}

function O(e) {
  let {
    editBroadcastInfoData: t
  } = e, {
    broadcastInfo: n,
    broadcastToDirectoryChannels: l,
    setBroadcastToDirectoryChannels: i,
    canEveryoneRoleViewEvent: a
  } = t;
  return n.can_broadcast ? (0, r.jsxs)(o.xJW, {
    title: y.intl.string(y.t.BgAW29),
    className: b.formItem,
    children: [(0, r.jsx)(o.ua7, {
      text: (0, r.jsx)(o.Text, {
        className: b.broadcastInfoTooltip,
        variant: "text-sm/normal",
        children: y.intl.string(y.t.gTgUmZ)
      }),
      "aria-label": y.intl.string(y.t.gTgUmZ),
      shouldShow: !a,
      children: e => {
        var t, n;
        return (0, r.jsx)("div", (t = E({}, e), n = n = {
          children: (0, r.jsx)(o.XZJ, {
            type: o.XZJ.Types.INVERTED,
            disabled: !a,
            value: l,
            onChange: (e, t) => i(t),
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "interactive-active",
              children: y.intl.string(y.t["8GW68/"])
            })
          })
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
    }), (0, r.jsx)(o.Text, {
      className: b.broadcastInfoDescription,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: y.intl.string(y.t.V8Oq8P)
    })]
  }) : null
}

function N(e) {
  let {
    guildEvent: t,
    guildEventId: i,
    guildId: N,
    editBroadcastInfoData: T,
    error: S,
    validationErrorMessage: I,
    onChange: Z,
    canSetFocus: P = false
  } = e, {
    entityType: w,
    channelId: D,
    description: _,
    name: R,
    image: A,
    scheduledEndTime: X,
    scheduledStartTime: L,
    recurrenceRule: G
  } = t, k = (0, d._d)(D), M = (0, d.K3)(D), W = null != t && (0, m.xt)(t), V = l.useMemo(() => {
    let e = (0, v.v1)(t);
    return null != e ? e : {
      startDate: a()(L)
    }
  }, [t, L]), [z, U] = l.useState(() => (0, v.zi)(a()(L), G)), B = l.useRef(null);
  l.useEffect(() => {
    if (P) {
      var e;
      null == (e = B.current) || e.focus()
    }
  }, [P]);
  let F = e => {
      Z({
        image: e
      })
    },
    q = (e, t) => {
      if (null == e || true === t) return void F(null);
      (0, o.ZDy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("32871")]).then(n.bind(n, 712451));
        return n => (0, r.jsx)(l, E({
          imageUri: e,
          file: t,
          onCrop: e => {
            let {
              imageUri: t
            } = e;
            return F(t)
          },
          uploadType: j.pC.SCHEDULED_EVENT_IMAGE
        }, n))
      })
    },
    H = null == S ? true : S.getFirstFieldErrorMessage("name"),
    Y = null == S ? true : S.getFirstFieldErrorMessage("description"),
    J = null == H && null == Y ? null == S ? true : S.getAnyErrorMessage() : null;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.blockedUsersContainer,
      children: null != D && !W && (k > 0 || M > 0) && (0, r.jsx)(x.mv, {
        channelId: D
      })
    }), (0, r.jsxs)("div", {
      className: b.form,
      children: [(0, r.jsxs)(o.xJW, {
        title: y.intl.string(y.t["0HbEQ0"]),
        className: b.topicFormItem,
        required: true,
        children: [(0, r.jsx)(s.Is, {
          className: b.textInput,
          onChange: e => {
            Z({
              name: e
            })
          },
          placeholder: y.intl.string(y.t["6/yarq"]),
          maxLength: p.p,
          value: R,
          autoComplete: "off",
          inputRef: B
        }), (0, r.jsx)(C, {
          error: H
        }), (0, r.jsx)(C, {
          error: J
        })]
      }), (0, r.jsx)(f.Z, {
        className: b.formItem,
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e, r = {
            scheduledStartTime: null == t ? true : t.toISOString(),
            scheduledEndTime: null == n ? true : n.toISOString()
          };
          null != t && null != X && (null == n ? true : n.isBefore(t)) && (r.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != z && (r.recurrenceRule = (0, v.mF)(z, t)), Z(r)
        },
        onRecurrenceChange: e => {
          let t = V.startDate;
          null != t && (Z({
            recurrenceRule: (0, v.mF)(e, t)
          }), U(e))
        },
        schedule: V,
        recurrenceRule: G,
        showEndDate: w === p.WX.EXTERNAL,
        requireEndDate: w === p.WX.EXTERNAL,
        disableStartDateTime: W,
        guildId: N
      }), (0, r.jsx)(C, {
        error: I
      }), (0, r.jsxs)(o.xJW, {
        title: y.intl.string(y.t["+gRCCw"]),
        className: b.formItem,
        children: [(0, r.jsx)(s.iS, {
          placeholder: y.intl.string(y.t["kWO/Ex"]),
          value: _,
          onChange: e => {
            Z({
              description: e
            })
          },
          maxLength: p.wm,
          autosize: true
        }), (0, r.jsx)(C, {
          error: Y
        })]
      }), (0, r.jsxs)(o.xJW, {
        title: y.intl.string(y.t.Ly121d),
        className: b.formItem,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: b.addImageHint,
          children: y.intl.string(y.t.B9C9bW)
        }), null != A ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Z, {
            className: b.imagePreview,
            iconWrapperClassName: b.imagePreviewInner,
            image: A,
            makeURL: e => {
              if (null == e) return null;
              if (null != N) {
                var n;
                return null != (n = (0, h.Z)((0, g.Gb)(t, N, i))) ? n : null
              }
            },
            onChange: q,
            hint: y.intl.string(y.t.G44Xmp),
            showRemoveButton: false,
            enabled: true
          }), (0, r.jsx)(o.zxk, {
            variant: "primary",
            size: "sm",
            text: y.intl.string(y.t.gmUvOz),
            onClick: () => F(null)
          })]
        }) : (0, r.jsx)(u.Z, {
          size: s.zx.Sizes.SMALL,
          onChange: q,
          buttonCTA: y.intl.string(y.t.vKCGYW)
        })]
      }), (0, r.jsx)(O, {
        editBroadcastInfoData: T
      })]
    })]
  })
}

function C(e) {
  let {
    error: t
  } = e;
  return null == t ? null : (0, r.jsx)(o.Text, {
    color: "text-danger",
    variant: "text-xs/normal",
    className: b.warning,
    children: t
  })
}