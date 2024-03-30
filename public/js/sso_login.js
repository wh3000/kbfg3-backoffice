/**
 * 
 */
function initializeWebCrypto() {
    // 설치 프로그램과 통신을 위한 URL 초기화 및 동작 여부 확인
    var whiteList = "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";
    var reqInit = webcrypto.addon.initializeCorsUrl(1500, whiteList);  // 입력 변수는 응답 대기 시간 msec 단위
    reqInit.onsuccess = function() {
      // NOTE : 동작중 프로그램의 버전 확인 필요시 활용. 'reqInit.version' 변수 값을 이용하여 원하는 버전의 설치를 유도할 수도 있음
      //alert('동작중인 프로그램 버전 : ' + reqInit.version);
  
      // 설치 프로그램의 최소버전을 임의의 버전 이상으로 하고 싶은 경우 활용
      if (webcrypto.addon.checkAddonVersion('3.0.37.2') === false) {
        // 동작중 프로그램 버전이 자바스크립트 모듈 버전이나 입력값 버전보다 낮은 경우 false 발생
        if(confirm('ISign+ WA v3.0 프로그램 버전이 낮습니다. 프로그램 다운로드 페이지로 이동하시겠습니까?')) {
          top.location.href =  "http://"+location.host+"/sso/package_download/ISignPlusWA_Setup_3.0.37.2_intranet.exe";    
        }
      }
      else
      {
              var login_req = webcrypto.addon.getValueForPredefinedKey('isignplus_cs_login_state');	 
              login_req.onerror = function(errMsg) {
                  //업무사이트에서 사용중인 ID/PW 로그인 URL 작성
                  alert('SSO 인증서 로그인 정보 없음.\nID/PW 로그인 창으로 전환 됩니다.'+	 errMsg);
                  top.location.href ="http://"+location.host+"/sso/ID_PW_Sample.html";
                  };
              login_req.onsuccess = function(value) {
                  var login_state=value;
                  // login_state 가 2 인 경우 인증서 로그인 완료된 사용자
                  if(login_state!=2)
                  {
                      //업무사이트에서 사용중인 ID/PW 로그인 URL 작성
                      alert('SSO 인증서 로그인 정보 없음.\nID/PW 로그인 창으로 전환 됩니다.');	
                      top.location.href ="http://"+location.host+"/sso/ID_PW_Sample.html";
                  }
              };
      }
          
    };
    reqInit.onerror = function(err) {
      if(confirm('ISign+ WA v3.0 프로그램이 실행중이 아닙니다. 프로그램 다운로드 페이지로 이동하시겠습니까?')) {
        top.location.href =  "http://"+location.host+"/sso/package_download/ISignPlusWA_Setup_3.0.33.2_intranet.exe";   
      }
    };
    reqInit.onforbidden = function() {
      alert('허용되지 않은 도메인입니다. ISign+ WA v3.0 프로그램을 사용할 수 없습니다.');
    };
  }
  
  function _predefinedGetValue() {
       
        }
  
  function onLoadFunction() {
    if (webcrypto.addon) {
      initializeWebCrypto();
    }
   }
  
  // 이벤트 등록 메소드, 크로스브라우징 고려
  var addEvent = addEvent || (function(_window) {
    if (_window.addEventListener) {
      return function(element, eventName, callback, isCapture) {
        element.addEventListener(eventName, callback, isCapture);
      };
    } else if (_window.attachEvent) {
      return function(element, eventName, callback) {
        element.attachEvent('on' + eventName, callback);
      };
    } else {
      return function(element, eventName, callback) {
        element['on' + eventName] = callback;
      };
    }
  })(window);
  
  addEvent(window, 'load', onLoadFunction, false);
  
  
  
  
  function Forward_SSO(ssoSuccessFn) {
         var ssoId;	
         var req = webcrypto.addon.getValueForPredefinedKey('eewin_last_logged_on_ssoid');
          req.onerror = function(errMsg) {
            alert('ISign+ WA 프로그램 설치 후 브라우저를 다시 열어서 접속해주세요.');
          };
          req.onsuccess = function(value) {
            console.log("🚀 ~ file: sso_login.js:86 ~ Forward_SSO ~ value:", value)
            var empNo_code=value.substr(0,1);	
              ssoid=value;
            // empNo_code 가 null 일 경우에는 보안 인증 프로그램 또는 로그인이 안된 경우
      if(!empNo_code)
        {
         alert("PC 보안 인증 프로그램 설치 또는 로그인이 되어 있으므로 ID/PW 로그인 창으로 전환 됩니다.");
         //업무사이트에서 사용중인 ID/PW 로그인 URL 작성
         location.href="ID_PW_Sample.html";
        }
      else
        {             
          //empNo_code 가 S일 경우 지주(SE) 은행 (S)가 중복 됨 ssoId가 SE로 시작 되면 지주 S면 은행으로 포워딩
          if(empNo_code=='S'||empNo_code=='s')
          
          {
            if(value.substr(0,2)=='SE' ||value.substr(0,2)=='se')
            {
              // location.href="KFG_SSO/business.jsp";
                        // 사번이 있으면 반환
              ssoSuccessFn(value);
            }
            else
            {
              alert('은행소속사용자는 ID/PASSWORD 로그인을 이용해주세요');
              return ;
              //location.href="Bank_SSO/business.jsp";
            }
          }
          //지주 사용자
          else if(empNo_code=='H' || empNo_code=='U' || empNo_code=='N' || empNo_code=='L' || empNo_code=='B' || empNo_code=='P' || empNo_code=='J' || empNo_code=='R' ||empNo_code=='I' || empNo_code=='C' || empNo_code=='D')
            {
              // location.href="KFG_SSO/business.jsp";
              // 사번이 있으면 반환
              ssoSuccessFn(value);
            }
          else if(empNo_code=='h' || empNo_code=='u' || empNo_code=='n' || empNo_code=='l' || empNo_code=='b' || empNo_code=='p' || empNo_code=='j' || empNo_code=='r' ||empNo_code=='i' || empNo_code=='c' || empNo_code=='d')
            {
                location.href="KFG_SSO/business.jsp";
            }
            //카드 사용자
            else if(empNo_code=='K'||empNo_code=='k'||empNo_code=='M'||empNo_code=='m')
            {
              alert('은행소속사용자는 ID/PASSWORD 로그인을 이용해주세요');
              return ;              
              //location.href="Card_SSO/business.jsp";
            }
   //은행 사용자
            else
            {
              alert('은행소속사용자는 ID/PASSWORD 로그인을 이용해주세요');
              return ;              
              //location.href="Bank_SSO/business.jsp";
  
            }
        }
          };
  }