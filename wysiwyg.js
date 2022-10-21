      /**
 * The function gets and applys the desired style.
 *   
 * @param   string  styleType     the desired affect (style)
 * @param   string  commandParam  a secondary style parameter
 */
function changeText( styleType, commandParam ) {

  if( typeof( commandParam ) == "undefined" ) { 
    commandParam = "";
  }

  if( styleType == 'createlink' ) {
    commandParam = prompt( "Введите ссылку, yep", "http://" );

    if( commandParam == "" || commandParam == "http://" )
    {
      styleType = "unlink";
    }
  }

  if( styleType == 'formatblock' && isIE() ) {
    document.execCommand( styleType, false, '<' + commandParam + '>' );
  } else {
    document.execCommand( styleType, false, commandParam );
  }

}

/**
 * The functions checks if the user uses Internet Explorer.
 * 
 * @return  Boolean  is the browser IE?
 */
function isIE() {

  var browserType = window.navigator.userAgent;

  if( browserType.indexOf( "MSIE " ) > 0 || !!navigator.userAgent.match( /Trident.*rv\:11\./ ) ) {
    return true;
  }

  return false;

}