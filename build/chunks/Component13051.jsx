/** Chunk was on 9414 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk13107 = require("./13107.js"),
  Chunk400284 = require("./400284.js"),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk434404 = require("./434404.js"),
  Chunk598077 = require("./598077.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk246946 = require("./246946.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162816 = require("./162816.js"),
  Chunk478411 = require("./478411.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: R,
      onToggleExpand: L,
      onDisable: M,
      onEnable: U
    } = e,
    [B, W] = r.useState(false),
    H = (0, m.e7)([S.Z], () => S.Z.hidePersonalInformation),
    G = (0, m.e7)([N.Z], () => N.Z.can(w.Plq.KICK_MEMBERS, n)),
    F = r.useCallback(() => {
      W(true), U(l)
    }, [l, U]),
    K = r.useCallback(() => {
      l.syncing || (0, f.h7j)(e => {
        if (!G && l.expire_behavior === c.l.KICK) return (0, i.jsx)(f.VoidConfirmModal, D(A({}, e), {
          header: P.intl.string(P.t.emx3lN),
          confirmText: P.intl.string(P.t.BddRzS),
          confirmButtonColor: b.Tt.BRAND,
          children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? P.intl.string(P.t.pDCiEf) : P.intl.string(P.t.sQqHFk)
          })
        }));
        let t = l.expire_behavior === c.l.REMOVE_ROLE ? P.intl.string(P.t["6kpw4i"]) : P.intl.string(P.t.fQUQIJ);
        return (0, i.jsx)(f.VoidConfirmModal, D(A({}, e), {
          header: P.intl.string(P.t.emx3lN),
          confirmText: t,
          cancelText: P.intl.string(P.t["ETE/oC"]),
          onConfirm: () => M(l),
          children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? P.intl.string(P.t.anKQWU) : P.intl.string(P.t["BW/xtn"])
          })
        }))
      })
    }, [l, M, G]),
    z = r.useCallback(() => {
      O.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    V = r.useCallback(() => {
      null != l.role_id && (O.Z.setSection(w.pNK.ROLES), O.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: q,
      channelURL: Y,
      expireBehaviorLabel: J,
      syncLabel: Q,
      subscribersText: X
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = x.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case u.b.YOUTUBE:
          return {
            serviceName: P.intl.string(P.t.aS6cK4), expireBehaviorLabel: P.intl.string(P.t.A5MiqO), syncLabel: P.intl.string(P.t["7vHKVe"]), subscribersText: P.intl.formatToPlainString(P.t["7lNtce"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case u.b.TWITCH:
        default:
          return {
            serviceName: P.intl.string(P.t.q4pBG3), expireBehaviorLabel: P.intl.string(P.t["S/WCrG"]), syncLabel: P.intl.string(P.t["0jbPK4"]), subscribersText: P.intl.formatToPlainString(P.t.RdUTrl, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    $ = (0, m.e7)([C.Z], () => null != l.role_id ? C.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: ee,
      syncDescriptionText: et
    } = r.useMemo(() => {
      let e;
      e = null != $ ? (0, i.jsx)(f.eee, {
        onClick: V,
        children: $.name
      }) : P.intl.string(P.t.PoWNfe);
      let t = x.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? P.intl.formatToPlainString(P.t.G16Wji, {
          user: l.user,
          platformName: t.name
        }) : P.intl.formatToPlainString(P.t.unl3AP, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [$, V, l.revoked, l.synced_at, l.type, l.user]),
    en = (0, m.e7)([C.Z], () => C.Z.getSortedRoles(n.id)),
    ei = r.useMemo(() => {
      let e = v.ZP.getGuildEmoji(n.id),
        t = en.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, en, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && W(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: f.T39,
    text: H ? P.intl.formatToPlainString(P.t.gcdJ8J, {
      timestamp: E.default.extractTimestamp(l.id)
    }) : P.intl.formatToPlainString(P.t.Nu9sat, {
      user: null != l.user ? new y.Z(l.user).tag : null,
      timestamp: E.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(Y);
    t = [{
      text: P.intl.format(P.t.BegylZ, {
        serviceName: q,
        accountUrl: Y,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let er = (0, i.jsxs)(j.Z, {
      className: _.header,
      align: j.Z.Align.CENTER,
      children: [(0, i.jsx)(Z.Z, {
        name: "".concat(l.name),
        detailsClassName: _.description,
        details: t
      }), l.enabled ? (0, i.jsx)(j.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(I.Z, {
          className: _.expandIcon,
          expanded: R && !B,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(j.Z.Child, {
        shrink: 0,
        grow: 0,
        children: B ? (0, i.jsx)(f.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: f.DuK,
          "aria-label": P.intl.string(P.t["7sCN8m"])
        }) : (0, i.jsx)(f.Button, {
          variant: "primary",
          size: "sm",
          onClick: F,
          text: P.intl.string(P.t["7sCN8m"])
        })
      })]
    }),
    el = null;
  return R && !B && null != o && (el = (0, i.jsxs)(j.Z, {
    className: _.body,
    direction: j.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(f.izJ, {
      className: _.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        subscribersText: r,
        descriptionText: l,
        roleLink: a,
        onSync: o
      } = e;
      return (0, i.jsxs)(j.Z, {
        children: [(0, i.jsxs)(j.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(f.Heading, {
            variant: "heading-md/semibold",
            className: k.marginBottom8,
            children: P.intl.string(P.t.eBtNBa)
          }), (0, i.jsx)(f.Text, {
            className: _.syncedRole,
            color: "text-strong",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(j.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(f.Heading, {
            variant: "heading-sm/semibold",
            className: k.marginBottom8,
            children: n
          }), (0, i.jsxs)(j.Z, {
            justify: j.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(j.Z, {
              direction: j.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(f.Text, {
                color: "text-strong",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(f.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(f.hU, {
              size: "sm",
              variant: "primary",
              icon: f.DuK,
              "aria-label": P.intl.string(P.t.BkuOO6),
              disabled: true
            }) : (0, i.jsx)(f.Button, {
              size: "sm",
              variant: "primary",
              text: P.intl.string(P.t.BkuOO6),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: Q,
      subscribersText: X,
      descriptionText: et,
      roleLink: ee,
      onSync: z
    }), (0, i.jsx)(f.izJ, {
      className: _.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(j.Z, {
        children: [(0, i.jsx)(j.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(p.y6, {
            label: n,
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              value: c.l.REMOVE_ROLE.toString(),
              label: P.intl.string(P.t["6kpw4i"])
            }, {
              value: c.l.KICK.toString(),
              label: P.intl.string(P.t.fQUQIJ)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(j.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(p.y6, {
            label: P.intl.string(P.t.uiXMow),
            placeholder: P.intl.string(P.t.uiXMow),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: Object.values(d.W).filter(Number.isInteger).map(e => ({
              value: "".concat(e),
              label: P.intl.formatToPlainString(P.t.eGjmy5, {
                days: e
              })
            })),
            onChange: e => l(parseInt(e)),
            isDisabled: t.syncing
          })
        })]
      })
    }({
      integration: o,
      labelText: J,
      onBehaviorChange: function(e) {
        h.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        h.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), !G && o.expire_behavior === c.l.KICK && (0, i.jsx)(f.Text, {
      className: _.kickPermissionWarning,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: P.intl.string(P.t.mThMlB)
    }), l.type === u.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(j.Z, {
        direction: j.Z.Direction.VERTICAL,
        children: [(0, i.jsx)("div", {
          className: a()(k.marginTop20, k.marginBottom8),
          children: (0, i.jsx)(f.Checkbox, {
            checked: !!t.enable_emoticons,
            disabled: t.syncing,
            onChange: e => r(e),
            label: P.intl.string(P.t["7r4OKg"])
          })
        }), (0, i.jsx)(j.Z, {
          wrap: j.Z.Wrap.WRAP,
          className: _.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(g.u, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: P.intl.formatToPlainString(P.t.n6ZZn4, {
                name: e.name
              }),
              draggable: false,
              className: a()(_.emoji, "emoji", "jumboable"),
              src: T.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              })
            }, e.name)
          }, t))
        })]
      })
    }({
      integration: o,
      emojis: ei,
      onToggle: function(e) {
        h.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(f.izJ, {
      className: _.bottomDivider
    }), (0, i.jsx)(j.Z, {
      children: (0, i.jsx)(f.Button, {
        size: "sm",
        variant: "critical-secondary",
        text: P.intl.string(P.t.M6q6eX),
        onClick: K
      })
    })]
  })), (0, i.jsx)(f.Zbd, {
    editable: true,
    className: _.card,
    children: (0, i.jsxs)(j.Z, {
      direction: j.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(f.P3F, {
        className: _.expandableHeader,
        "aria-expanded": R && !B,
        onClick: L,
        children: er
      }) : er, el]
    })
  })
}