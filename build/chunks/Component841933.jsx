/** Chunk was on 99583 **/
/** chunk id: 841933, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk716416 = require("./716416.js"),
  Chunk886486 = require("./886486.jsx"),
  Chunk123393 = require("./123393.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk427157 = require("./427157.js"),
  Chunk71393 = require("./71393.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk743981 = require("./743981.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk971517 = require("./971517.js"),
  Chunk186891 = require("./186891.js");

function I(e) {
  let {
    icon: t,
    label: l,
    onClick: r,
    disabled: i
  } = e;
  return (0, n.jsxs)(o.DUT, {
    className: s()(O.hP, {
      [O.r9]: i
    }),
    onClick: i ? T.tEg : r,
    "aria-label": l,
    children: [(0, n.jsx)(t, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "none",
      children: l
    })]
  })
}

function R(e) {
  let {
    user: t,
    guildId: l,
    joinRequest: r
  } = e, {
    analyticsLocations: i
  } = (0, u.Ay)(), a = () => {
    (0, v.openUserProfileModal)({
      userId: t.id,
      joinRequestId: r.joinRequestId,
      sourceAnalyticsLocations: i
    })
  };
  return (0, n.jsxs)("div", {
    className: O.op,
    children: [(0, n.jsxs)("div", {
      className: N.FD,
      children: [(0, n.jsx)(o.DUT, {
        onClick: a,
        className: s()(O.vk, N.Wn),
        children: (0, n.jsx)(o.euF, {
          src: t.getAvatarURL(l, 48),
          "aria-label": t.username,
          size: o._3J.SIZE_48
        })
      }), (0, n.jsxs)("div", {
        className: N.oS,
        children: [(0, n.jsxs)("div", {
          className: N.K$,
          children: [(0, n.jsx)(o.DUT, {
            onClick: a,
            className: O.vk,
            children: (0, n.jsx)(o.Text, {
              variant: "text-lg/medium",
              children: null == t ? true : t.globalName
            })
          }), (0, n.jsx)(g.Ay, {
            primaryGuild: null == t ? true : t.primaryGuild,
            userId: null == t ? true : t.id,
            contextGuildId: l,
            badgeSize: y.Sl.SIZE_16,
            textVariant: "heading-md/semibold",
            className: N.Dz,
            containerClassName: N.UL
          })]
        }), (0, n.jsx)(o.DUT, {
          onClick: a,
          className: O.vk,
          children: (0, n.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-default",
            children: S.Ay.getUserTag(t)
          })
        })]
      })]
    }), (0, n.jsx)(o.DUT, {
      className: N.d4,
      onClick: () => m.A.setSelectedGuildJoinRequest(l, null),
      children: (0, n.jsx)(o.PGe, {
        size: "md",
        color: "currentColor"
      })
    })]
  })
}

function D(e) {
  let {
    user: t,
    guildId: l,
    joinRequest: r
  } = e, {
    approveRequest: i,
    rejectRequest: s,
    handleOpenInterview: a,
    submitting: c
  } = (0, h.W)(l, t.id, r.joinRequestId, r.interviewChannelId);
  return (0, n.jsxs)("div", {
    className: O.$l,
    children: [(0, n.jsx)(I, {
      icon: o.yr3,
      label: _.intl.string(_.t.BzjDQJ),
      onClick: i,
      disabled: c
    }), (0, n.jsx)(I, {
      icon: o.aXh,
      label: _.intl.string(_.t.hDtbsz),
      onClick: s,
      disabled: c
    }), (0, n.jsx)(I, {
      icon: o.oyn,
      label: _.intl.string(_.t.KQeYoC),
      onClick: a,
      disabled: c
    })]
  })
}

function P(e) {
  var t;
  let {
    joinRequest: l
  } = e, {
    actionedAt: r,
    actionedByUser: i,
    rejectionReason: s
  } = l;
  return (0, n.jsxs)("div", {
    className: O.Ik,
    children: [(0, n.jsx)(o.aXh, {
      size: "lg",
      color: o.LU0.colors.BACKGROUND_BASE_LOWER,
      secondaryColor: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: _.intl.string(_.t.bSZkla)
      }), null != i && null != r ? (0, n.jsxs)("div", {
        className: O.Ay,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: _.intl.formatToPlainString(_.t.qnimbL, {
            username: null != (t = i.global_name) ? t : i.username
          })
        }), (0, n.jsx)("div", {
          className: O.Om
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: c()(E.default.extractTimestamp(r)).format("ll")
        })]
      }) : null, null != s && (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: _.intl.formatToPlainString(_.t.fU5PPM, {
          rejectionReason: s
        })
      })]
    })]
  })
}

function C(e) {
  var t;
  let {
    joinRequest: l
  } = e, {
    actionedAt: r,
    actionedByUser: i
  } = l;
  return (0, n.jsxs)("div", {
    className: O.Ik,
    children: [(0, n.jsx)(o.yr3, {
      size: "lg",
      color: o.LU0.colors.STATUS_POSITIVE_BACKGROUND,
      secondaryColor: o.LU0.colors.STATUS_POSITIVE_TEXT
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: _.intl.string(_.t.aURgY2)
      }), null != i && null != r ? (0, n.jsxs)("div", {
        className: O.Ay,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: _.intl.formatToPlainString(_.t.qnimbL, {
            username: null != (t = i.global_name) ? t : i.username
          })
        }), (0, n.jsx)("div", {
          className: O.Om
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: c()(E.default.extractTimestamp(r)).format("ll")
        })]
      }) : null]
    })]
  })
}

function M(e) {
  let {
    user: t,
    joinRequest: l
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Text, {
      className: O._3,
      variant: "text-sm/medium",
      color: "text-muted",
      children: _.intl.string(_.t["ldCE/p"])
    }), (0, n.jsxs)("div", {
      className: O.TT,
      children: [(0, n.jsxs)("div", {
        className: O.lj,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: _.intl.string(_.t.SaDIpL)
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: c()(E.default.extractTimestamp(t.id)).format("ll")
        })]
      }), (0, n.jsxs)("div", {
        className: O.lj,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: _.intl.string(_.t["Vt4cn+"])
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: c()(l.createdAt).format("ll")
        })]
      })]
    })]
  })
}

function w(e) {
  let {
    guildId: t
  } = e, l = (0, b.R)({
    guildId: t
  }), {
    user: i
  } = null != l ? l : {}, a = r.useMemo(() => {
    var e;
    return null != (e = null == l ? true : l.formResponses) ? e : []
  }, [null == l ? true : l.formResponses]), c = r.useMemo(() => null != i ? new A.A(i) : null, [i]), u = (0, d.bG)([p.A], () => p.A.getGuild(t), [t]);
  return ((0, x.HU)({
    subsection: _.intl.string(_.t.nqrK8X),
    location: null == u ? true : u.name
  }), null == l || null == u || null == c || null == i) ? null : (0, n.jsx)("section", {
    className: O.pz,
    children: (0, n.jsx)(o.HOs, {
      children: (0, n.jsxs)("div", {
        className: O.WH,
        children: [(0, n.jsxs)("div", {
          className: O.Ui,
          children: [(0, n.jsx)(R, {
            user: c,
            guildId: t,
            joinRequest: l
          }), l.applicationStatus === j.B5.SUBMITTED && (0, n.jsx)(D, {
            user: c,
            guildId: t,
            joinRequest: l
          }), l.applicationStatus === j.B5.REJECTED && (0, n.jsx)(P, {
            joinRequest: l
          }), l.applicationStatus === j.B5.APPROVED && (0, n.jsx)(C, {
            joinRequest: l
          })]
        }), (0, n.jsxs)("div", {
          className: s()(O.Ui, O.gi),
          children: [(0, n.jsx)(f.A, {
            guildId: u.id,
            formFields: a,
            user: c,
            showRequirements: false
          }), (0, n.jsx)(M, {
            guildId: t,
            user: c,
            joinRequest: l
          })]
        })]
      })
    })
  })
}