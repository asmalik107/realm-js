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

import { Storage } from "./storage";
import { Window } from "./OAuth2Helper";

/**
 * A simplified interface for the console.
 * This should reflect the lowest common denominator across environemnts.
 */
interface Console {
    /**
     *
     */
    error(...data: any[]): void;
    /**
     *
     */
    log(...data: any[]): void;
    /**
     *
     */
    warn(...data: any[]): void;
}

export type Environment = {
    /**
     * A console object used to log stuff.
     */
    console: Console;
    /**
     * The default storage instance on the environment.
     */
    defaultStorage: Storage;

    /**
     * Open a browser window.
     */
    openWindow: (url: string) => Window | null;
};

let environment: Environment | null = null;

/**
 * Set the environment of execution.
 * Note: This should be called as the first thing before executing any code which calls getEnvironment()
 *
 * @param e An object containing environment specific implementations.
 */
export function setEnvironment(e: Environment) {
    environment = e;
}

/**
 * Get the environment of execution.
 *
 * @returns An object containing environment specific implementations.
 */
export function getEnvironment() {
    if (environment) {
        return environment;
    } else {
        throw new Error("Cannot get environment before it's set");
    }
}