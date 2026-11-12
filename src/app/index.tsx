import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import { View } from 'react-native';

<ThemeText style={globalStyles.mainResult}>CalculatorApp</ThemeText>


const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      ...
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        {/* Botón 1 */}
        <CalculatorButton label="C" blackText color={Colors.lightGray} onPress={() => console.log('C')} />
        <CalculatorButton label="+/-" blackText color={Colors.lightGray} onPress={() => console.log('+/-')} />
        <CalculatorButton label="del" blackText color={Colors.lightGray} onPress={() => console.log('del')} />
        <CalculatorButton label="÷" blackText color={Colors.lightGray} onPress={() => console.log('÷')} />
      </View>
    </View>
  );
};



export default CalculatorApp;
