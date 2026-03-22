// useErrorModal.js
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const useErrorModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    type: 'warning',
    title: '',
    message: '',
    actions: [],
  });

  const showError = (config) => {
    setModalConfig(config);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const ModalComponent = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={hideModal}
    >
      <View style={modalStyles.centeredView}>
        <View style={modalStyles.modalView}>
          <Text style={modalStyles.modalTitle}>{modalConfig.title}</Text>
          <Text style={modalStyles.modalMessage}>{modalConfig.message}</Text>
          
          <View style={modalStyles.buttonContainer}>
            {modalConfig.actions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  modalStyles.button,
                  action.variant === 'primary' && modalStyles.primaryButton
                ]}
                onPress={() => {
                  if (action.onPress) action.onPress();
                  hideModal();
                }}
              >
                <Text style={[
                  modalStyles.buttonText,
                  action.variant === 'primary' && modalStyles.primaryButtonText
                ]}>
                  {action.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );

  return {
    showError,
    ModalComponent,
  };
};



const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e0e0e0',
    minWidth: 100,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  primaryButtonText: {
    color: '#fff',
  },
});