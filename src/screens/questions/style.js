import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: 45,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    return: {
        width: 80,
        backgroundColor: 'white',
        height: 25,
        borderRadius: 12,
        marginLeft: 10,
    },
    returnText: {
        textAlign: 'center',
        marginTop: 3,
    },
    icon: {
        flexDirection: 'row',
        marginRight: 5,

    },
    questions: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginBottom: 12,
        marginRight:12,
      },
      iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
      },
      iconSquare: {
        width: 38,
        height: 38,
        backgroundColor: '#EBEBEB',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
      },
      cogMenu: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    infoContentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10,
        justifyContent: 'flex-end',
    },
    infoCircle: {
        width: 'auto',
        height: 'auto',
        padding: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 19,
    },
    infoText: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 10,
    },
    cogMenu: {
        flexDirection: 'row',
      },

})