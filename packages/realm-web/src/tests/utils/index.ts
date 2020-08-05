////////////////////////////////////////////////////////////////////////////
//
// Copyright 2020 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

/**
 * The default headers added by the Fetcher
 */
export const DEFAULT_HEADERS = {
    Accept: "application/json",
};

/**
 * The default headers added by the Fetcher
 */
export const DEFAULT_BODY_HEADERS = {
    ...DEFAULT_HEADERS,
    "Content-Type": "application/json",
};

/**
 * A typical location request
 */
export const LOCATION_REQUEST = {
    method: "GET",
    url: "http://localhost:1234/api/client/v2.0/app/my-mocked-app/location",
    headers: DEFAULT_HEADERS,
};

/**
 * A typical location response
 */
export const LOCATION_RESPONSE = {
    hostname: "http://localhost:1337",
    location: "US-VA",
    deployment_model: "GLOBAL", // eslint-disable-line @typescript-eslint/camelcase
};

export * from "./MockApp";
export * from "./MockFetcher";
export * from "./MockNetworkTransport";