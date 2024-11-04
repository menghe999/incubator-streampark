/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Tag } from 'ant-design-vue';
import { defineComponent } from 'vue';
import './LoginSlogan.less';
import Icon from '/@/components/Icon';
import { version } from '../../../../package.json';
export default defineComponent({
  name: 'LoginSlogan',
  setup() {
    return () => {
      return (
        <div class="!text-left w-550px m-auto">
          <div class="mb-5 system_info pt-0">
            <div class="project_title fw-bold text-white mb-3">
              <div class="flex  items-start">
                <div
                  class="animated-gradient-text_background animated-gradient-text_background-2"
                  style={{
                    '--content': '"实时计算"',
                    '--start-color': '#FFF',
                    '--end-color': '#00DFD8',
                  }}  
                >
                  <span class="animated-gradient-text_foreground animated-gradient-text_foreground-2">
                  实时计算
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
