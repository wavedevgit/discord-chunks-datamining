/** Chunk was on 86142 **/
/** chunk id: 574454, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, i, Chunk635377 = require("./635377.js"),
  l = require.n(Chunk635377),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js");
let u = {
    taken: null,
    error: true,
    rateLimited: true
  },
  d = {
    validations: new(l())({
      max: 100,
      maxAge: 6e4
    }),
    currentUsernameInvalid: false,
    retryAfterTime: null,
    suggestions: {
      migration: {
        suggestion: {
          username: true
        },
        fetched: false,
        usernameSuggestionLoading: false
      },
      registration: {
        suggestion: {
          username: true
        },
        source: true,
        fetched: false
      }
    }
  };
class h extends(i = Chunk311907.Ay.Store) {
  isRateLimited() {
    return null != d.retryAfterTime && Date.now() < d.retryAfterTime
  }
  validate(e) {
    let t = d.validations.get(e);
    return this.isRateLimited() && (null == t || t.rateLimited) ? u : this.isRateLimited() || null == t || !t.rateLimited ? t : true
  }
  registrationUsernameSuggestion() {
    return d.suggestions.registration.suggestion.username
  }
  usernameSuggestion() {
    return d.suggestions.migration.suggestion.username
  }
  usernameSuggestionLoading() {
    return d.suggestions.migration.usernameSuggestionLoading
  }
  isCurrentUsernameInvalid() {
    return d.currentUsernameInvalid
  }
  wasRegistrationSuggestionFetched(e) {
    return d.suggestions.registration.source === e && d.suggestions.registration.fetched
  }
  wasSuggestionsFetched() {
    return d.suggestions.migration.fetched
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "PomeloStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "PomeloStore";
let p = new h(Chunk73153.h, {
  POMELO_ATTEMPT_SUCCESS: function(e) {
    let {
      username: t,
      taken: n
    } = e;
    d.validations.set(t, {
      taken: n
    })
  },
  POMELO_ATTEMPT_FAILURE: function(e) {
    let {
      username: t,
      error: n,
      statusCode: r,
      retryAfter: i
    } = e;
    429 === r ? d.validations.set(t, {
      taken: null,
      error: n,
      rateLimited: true
    }, (null != i ? i : 7) * c.A.Millis.SECOND) : d.validations.set(t, {
      taken: null,
      error: n
    }), null != i && (d.retryAfterTime = Date.now() + i * c.A.Millis.SECOND)
  },
  POMELO_SUGGESTIONS_RESET: function() {
    d.suggestions.migration = {
      suggestion: {
        username: true
      },
      fetched: false,
      usernameSuggestionLoading: false
    }, d.suggestions.registration = {
      suggestion: {
        username: true
      },
      source: true,
      fetched: false
    }
  },
  POMELO_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t
    } = e;
    d.suggestions.migration = {
      suggestion: t,
      fetched: true,
      usernameSuggestionLoading: false
    }, (null == t ? true : t.invalid_current_username) === true && (d.currentUsernameInvalid = true)
  },
  POMELO_SUGGESTIONS_FETCH: function(e) {
    let {
      usernameSuggestionLoading: t
    } = e;
    d.suggestions.migration.usernameSuggestionLoading = t
  },
  POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
    let {
      suggestion: t,
      source: n
    } = e;
    d.suggestions.registration = {
      suggestion: t,
      source: n,
      fetched: true
    }, (null == t ? true : t.username) != null && d.validations.set(t.username, {
      taken: false
    })
  }
})