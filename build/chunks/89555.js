/** Chunk was on web.js **/
/** chunk id: 89555, original params: e,t (module,exports,re quire) **/
"use strict";

function n(e, t) {
  return "string" == typeof(null == t ? true : t.format) ? Object.assign(Object.assign({}, e[t.format]), t) : t
}
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.DEFAULT_FORMAT_CONFIG = true, exports.resolveFormatConfigOptions = n, exports.DEFAULT_FORMAT_CONFIG = {
  duration: {},
  list: {},
  relativeTime: {},
  number: {
    integer: {
      maximumFractionDigits: 0
    },
    currency: {
      style: "currency"
    },
    percent: {
      style: "percent"
    }
  },
  date: {
    short: {
      month: "numeric",
      day: "numeric",
      year: "2-digit"
    },
    medium: {
      month: "short",
      day: "numeric",
      year: "numeric"
    },
    long: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    full: {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  },
  time: {
    short: {
      hour: "numeric",
      minute: "numeric"
    },
    medium: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}